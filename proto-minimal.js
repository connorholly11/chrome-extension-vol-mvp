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
            
          case 2: // InfoResp
            if (wireType === 2) {
              const len = this.readVarint(view, offset).value;
              offset += this.readVarint(view, offset).bytes;
              msg.InfoResp = { data: 'Account/Position data' };
              msg.messageType = 'InfoResp';
              offset += len;
            }
            break;
            
          case 10: // Pong
            if (wireType === 2) {
              const len = this.readVarint(view, offset).value;
              offset += this.readVarint(view, offset).bytes;
              msg.Pong = {};
              msg.messageType = 'Pong';
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