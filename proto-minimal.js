// Minimal protobuf implementation for Volumetrica messages
// This avoids importing the full protobuf library which crashes service workers

export const ProtoMinimal = {
  // Encode a ClientRequestMsg
  encodeClientRequest(obj) {
    const parts = [];
    
    // LoginReq = field 1
    if (obj.LoginReq) {
      parts.push(this.encodeTag(1, 2)); // field 1, wire type 2 (length-delimited)
      const loginBytes = this.encodeLoginRequest(obj.LoginReq);
      parts.push(this.encodeVarint(loginBytes.length));
      parts.push(loginBytes);
    }
    
    // Ping = field 2
    if (obj.Ping) {
      parts.push(this.encodeTag(2, 2)); // field 2, wire type 2
      parts.push(new Uint8Array([0])); // empty message
    }
    
    // InfoReq = field 3
    if (obj.InfoReq) {
      parts.push(this.encodeTag(3, 2)); // field 3, wire type 2
      const infoBytes = this.encodeInfoRequest(obj.InfoReq);
      parts.push(this.encodeVarint(infoBytes.length));
      parts.push(infoBytes);
    }
    
    // Order = field 6 (repeated)
    if (obj.Order) {
      for (const order of obj.Order) {
        parts.push(this.encodeTag(6, 2)); // field 6, wire type 2
        const orderBytes = this.encodeOrder(order);
        parts.push(this.encodeVarint(orderBytes.length));
        parts.push(orderBytes);
      }
    }
    
    // Combine all parts
    return this.concat(parts);
  },
  
  // Encode LoginRequestMsg
  encodeLoginRequest(login) {
    const parts = [];
    
    // Token = field 1
    if (login.Token) {
      parts.push(this.encodeTag(1, 2)); // field 1, wire type 2
      const tokenBytes = new TextEncoder().encode(login.Token);
      parts.push(this.encodeVarint(tokenBytes.length));
      parts.push(tokenBytes);
    }
    
    // AccountSubscriptionMode = field 10
    if (login.AccountSubscriptionMode !== undefined) {
      parts.push(this.encodeTag(10, 0)); // field 10, wire type 0 (varint)
      parts.push(this.encodeVarint(login.AccountSubscriptionMode));
    }
    
    return this.concat(parts);
  },
  
  // Encode InfoRequestMsg
  encodeInfoRequest(info) {
    const parts = [];
    
    // Modes = field 1 (repeated)
    if (info.Modes) {
      for (const mode of info.Modes) {
        parts.push(this.encodeTag(1, 0)); // field 1, wire type 0
        parts.push(this.encodeVarint(mode));
      }
    }
    
    // RequestId = field 2
    if (info.RequestId !== undefined) {
      parts.push(this.encodeTag(2, 0)); // field 2, wire type 0
      parts.push(this.encodeVarint(info.RequestId));
    }
    
    // SubscriptionEnabled = field 3 (optional, try adding it)
    if (info.SubscriptionEnabled !== undefined) {
      parts.push(this.encodeTag(3, 0)); // field 3, wire type 0
      parts.push(this.encodeVarint(info.SubscriptionEnabled ? 1 : 0));
    }
    
    return this.concat(parts);
  },
  
  // Encode Order message
  encodeOrder(order) {
    const parts = [];
    
    // OrderInsert = field 1
    if (order.OrderInsert) {
      parts.push(this.encodeTag(1, 2)); // field 1, wire type 2
      const insertBytes = this.encodeOrderInsert(order.OrderInsert);
      parts.push(this.encodeVarint(insertBytes.length));
      parts.push(insertBytes);
    }
    
    return this.concat(parts);
  },
  
  // Encode OrderInsert message
  encodeOrderInsert(insert) {
    const parts = [];
    
    // ContractId = field 1
    if (insert.ContractId !== undefined) {
      parts.push(this.encodeTag(1, 0)); // field 1, wire type 0
      parts.push(this.encodeVarint(insert.ContractId));
    }
    
    // SeqClientId = field 2
    if (insert.SeqClientId !== undefined) {
      parts.push(this.encodeTag(2, 0)); // field 2, wire type 0
      parts.push(this.encodeVarint(insert.SeqClientId));
    }
    
    // Quantity = field 3
    if (insert.Quantity !== undefined) {
      parts.push(this.encodeTag(3, 0)); // field 3, wire type 0
      parts.push(this.encodeVarint(insert.Quantity));
    }
    
    // Price = field 4 (double)
    if (insert.Price !== undefined) {
      parts.push(this.encodeTag(4, 1)); // field 4, wire type 1 (64-bit)
      const buffer = new ArrayBuffer(8);
      new DataView(buffer).setFloat64(0, insert.Price, true);
      parts.push(new Uint8Array(buffer));
    }
    
    // OrdType = field 5
    if (insert.OrdType !== undefined) {
      parts.push(this.encodeTag(5, 0)); // field 5, wire type 0
      parts.push(this.encodeVarint(insert.OrdType));
    }
    
    // AccNumber = field 10
    if (insert.AccNumber !== undefined) {
      parts.push(this.encodeTag(10, 0)); // field 10, wire type 0
      parts.push(this.encodeVarint(insert.AccNumber));
    }
    
    // Source = field 15
    if (insert.Source !== undefined) {
      parts.push(this.encodeTag(15, 0)); // field 15, wire type 0
      parts.push(this.encodeVarint(insert.Source));
    }
    
    return this.concat(parts);
  },
  
  // Decode ServerResponseMsg (simplified but more complete)
  decodeServerResponse(buffer) {
    const view = new DataView(buffer);
    let offset = 0;
    const msg = {};
    
    try {
      while (offset < buffer.byteLength) {
        if (offset >= buffer.byteLength) break;
        
        const tag = view.getUint8(offset++);
        const fieldNum = tag >> 3;
        const wireType = tag & 7;
        
        // Handle different field numbers
        switch (fieldNum) {
          case 1: // LoginResp
            if (wireType === 2) {
              const len = this.readVarint(view, offset).value;
              offset += this.readVarint(view, offset).bytes;
              msg.LoginResp = { Success: true };
              msg.messageType = 'LoginResp';
              offset += len;
            }
            break;
            
          case 3: // InfoResp (field 3, not 2!)
            if (wireType === 2) {
              const len = this.readVarint(view, offset).value;
              offset += this.readVarint(view, offset).bytes;
              
              msg.InfoResp = { 
                length: len
              };
              msg.messageType = 'InfoResp';
              
              // Parse InfoResp content
              const infoEnd = offset + len;
              while (offset < infoEnd) {
                const infoTag = view.getUint8(offset++);
                const infoFieldNum = infoTag >> 3;
                const infoWireType = infoTag & 7;
                
                if (infoFieldNum === 2 && infoWireType === 0) { // RequestId
                  const reqId = this.readVarint(view, offset);
                  msg.InfoResp.requestId = reqId.value;
                  offset += reqId.bytes;
                } else if (infoFieldNum === 4 && infoWireType === 2) { // Position data
                  const posLen = this.readVarint(view, offset).value;
                  offset += this.readVarint(view, offset).bytes;
                  
                  if (!msg.InfoResp.positions) msg.InfoResp.positions = [];
                  
                  // Parse position data
                  const posEnd = offset + posLen;
                  const position = {};
                  
                  // Log raw bytes for debugging
                  const posBytes = [];
                  for (let i = 0; i < Math.min(posLen, 20); i++) {
                    posBytes.push(view.getUint8(offset + i).toString(16).padStart(2, '0'));
                  }
                  console.log('Position data in InfoResp:', posBytes.join(' '));
                  
                  while (offset < posEnd) {
                    const posTag = view.getUint8(offset++);
                    const posFieldNum = posTag >> 3;
                    const posWireType = posTag & 7;
                    
                    if (posFieldNum === 1 && posWireType === 0) { // Contract ID
                      const contractId = this.readVarint(view, offset);
                      position.contractId = contractId.value;
                      offset += contractId.bytes;
                    } else if (posFieldNum === 2 && posWireType === 0) { // Position type/status
                      const type = this.readVarint(view, offset);
                      position.type = type.value;
                      offset += type.bytes;
                    } else if (posFieldNum === 3 && posWireType === 1) { // Double value (quantity?)
                      position.value1 = view.getFloat64(offset, true);
                      offset += 8;
                    } else if (posFieldNum === 4 && posWireType === 1) { // Another double
                      position.value2 = view.getFloat64(offset, true);
                      offset += 8;
                    } else if (posFieldNum === 8 && posWireType === 0) { // Account number
                      const accNo = this.readVarint(view, offset);
                      position.accountNo = accNo.value;
                      offset += accNo.bytes;
                    } else if (posFieldNum === 11 && posWireType === 0) { // Quantity
                      const qty = this.readVarint(view, offset);
                      position.quantity = qty.value;
                      offset += qty.bytes;
                    } else if (posFieldNum === 12 && posWireType === 0) { // Side (1=buy, 2=sell)
                      const side = this.readVarint(view, offset);
                      position.side = side.value;
                      offset += side.bytes;
                    } else if (posFieldNum === 13 && posWireType === 2) { // Symbol string
                      const symLen = this.readVarint(view, offset).value;
                      offset += this.readVarint(view, offset).bytes;
                      const decoder = new TextDecoder();
                      position.symbol = decoder.decode(new Uint8Array(view.buffer, view.byteOffset + offset, symLen));
                      offset += symLen;
                    } else {
                      // Skip unknown fields
                      if (posWireType === 0) {
                        const skip = this.readVarint(view, offset);
                        offset += skip.bytes;
                      } else if (posWireType === 2) {
                        const skipLen = this.readVarint(view, offset).value;
                        offset += this.readVarint(view, offset).bytes + skipLen;
                      } else if (posWireType === 1) {
                        offset += 8;
                      } else if (posWireType === 5) {
                        offset += 4;
                      }
                    }
                  }
                  
                  msg.InfoResp.positions.push(position);
                } else {
                  // Skip unknown fields
                  if (infoWireType === 0) {
                    const skip = this.readVarint(view, offset);
                    offset += skip.bytes;
                  } else if (infoWireType === 2) {
                    const skipLen = this.readVarint(view, offset).value;
                    offset += this.readVarint(view, offset).bytes + skipLen;
                  } else {
                    offset += 8;
                  }
                }
              }
            }
            break;
            
          case 2: // Pong
            if (wireType === 2) {
              const len = this.readVarint(view, offset).value;
              offset += this.readVarint(view, offset).bytes;
              msg.Pong = {};
              msg.messageType = 'Pong';
              offset += len;
            }
            break;
            
          case 4: // BalanceInfo (repeated)
            if (wireType === 2) {
              const len = this.readVarint(view, offset).value;
              offset += this.readVarint(view, offset).bytes;
              
              if (!msg.BalanceInfo) msg.BalanceInfo = [];
              
              // Parse the balance message content
              const balanceEnd = offset + len;
              const balance = {};
              
              while (offset < balanceEnd) {
                const balTag = view.getUint8(offset++);
                const balFieldNum = balTag >> 3;
                const balWireType = balTag & 7;
                
                if (balFieldNum === 1 && balWireType === 1) { // Balance (double)
                  balance.balance = view.getFloat64(offset, true);
                  offset += 8;
                } else if (balFieldNum === 2 && balWireType === 0) { // AccountNo (varint)
                  const accountResult = this.readVarint(view, offset);
                  balance.accountNo = accountResult.value;
                  offset += accountResult.bytes;
                } else {
                  // Skip unknown fields
                  if (balWireType === 0) {
                    const skip = this.readVarint(view, offset);
                    offset += skip.bytes;
                  } else if (balWireType === 2) {
                    const skipLen = this.readVarint(view, offset).value;
                    offset += this.readVarint(view, offset).bytes + skipLen;
                  } else if (balWireType === 1) {
                    offset += 8; // 64-bit fixed
                  } else if (balWireType === 5) {
                    offset += 4; // 32-bit fixed
                  }
                }
              }
              
              msg.BalanceInfo.push(balance);
              msg.messageType = 'BalanceInfo';
            }
            break;
            
          case 7: // OrderInfo (repeated)
            if (wireType === 2) {
              const len = this.readVarint(view, offset).value;
              offset += this.readVarint(view, offset).bytes;
              if (!msg.OrderInfo) msg.OrderInfo = [];
              msg.OrderInfo.push({});
              msg.messageType = 'OrderInfo';
              offset += len;
            }
            break;
            
          case 13: // PositionInfo
            if (wireType === 2) {
              const len = this.readVarint(view, offset).value;
              offset += this.readVarint(view, offset).bytes;
              if (!msg.PositionInfo) msg.PositionInfo = [];
              msg.PositionInfo.push({});
              msg.messageType = 'PositionInfo';
              offset += len;
            }
            break;
            
          case 20: // AccountHeaderMsg
            if (wireType === 2) {
              const len = this.readVarint(view, offset).value;
              offset += this.readVarint(view, offset).bytes;
              msg.AccountHeaderMsg = { accounts: [] };
              msg.messageType = 'AccountHeaderMsg';
              offset += len;
            }
            break;
            
          case 50: // PositionUpdMsg
            if (wireType === 2) {
              const len = this.readVarint(view, offset).value;
              offset += this.readVarint(view, offset).bytes;
              msg.PositionUpdMsg = {};
              msg.messageType = 'PositionUpdMsg';
              offset += len;
            }
            break;
            
          case 51: // OrderInfoMsg
            if (wireType === 2) {
              const len = this.readVarint(view, offset).value;
              offset += this.readVarint(view, offset).bytes;
              msg.OrderInfoMsg = {};
              msg.messageType = 'OrderInfoMsg';
              offset += len;
            }
            break;
            
          default:
            // Skip unknown fields
            if (wireType === 0) {
              // Varint
              const varint = this.readVarint(view, offset);
              offset += varint.bytes;
            } else if (wireType === 2) {
              // Length-delimited
              const len = this.readVarint(view, offset).value;
              offset += this.readVarint(view, offset).bytes;
              offset += len;
            } else {
              // Skip other wire types
              offset++;
            }
        }
      }
    } catch (e) {
      console.error('Decode error at offset', offset, ':', e);
    }
    
    // If we couldn't identify the message, log the field numbers we saw
    if (!msg.messageType) {
      msg.unknownMessage = true;
      msg.size = buffer.byteLength;
    }
    
    return msg;
  },
  
  // Helper to read varint
  readVarint(view, offset) {
    let value = 0;
    let bytes = 0;
    let b;
    do {
      if (offset + bytes >= view.byteLength) break;
      b = view.getUint8(offset + bytes);
      value |= (b & 0x7F) << (7 * bytes);
      bytes++;
    } while (b & 0x80);
    return { value, bytes };
  },
  
  // Helper functions
  encodeTag(fieldNum, wireType) {
    return new Uint8Array([(fieldNum << 3) | wireType]);
  },
  
  encodeVarint(value) {
    const bytes = [];
    while (value > 127) {
      bytes.push((value & 127) | 128);
      value >>>= 7;
    }
    bytes.push(value & 127);
    return new Uint8Array(bytes);
  },
  
  concat(arrays) {
    const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const arr of arrays) {
      result.set(arr, offset);
      offset += arr.length;
    }
    return result;
  }
};