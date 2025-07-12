import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace PropTradingProtocol. */
export namespace PropTradingProtocol {

    /** Properties of a PingMsg. */
    interface IPingMsg {

        /** PingMsg Connected */
        Connected?: (boolean|null);

        /** PingMsg AckValue */
        AckValue?: (number|Long|null);
    }

    /** Represents a PingMsg. */
    class PingMsg implements IPingMsg {

        /**
         * Constructs a new PingMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IPingMsg);

        /** PingMsg Connected. */
        public Connected: boolean;

        /** PingMsg AckValue. */
        public AckValue: (number|Long);

        /**
         * Creates a new PingMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingMsg instance
         */
        public static create(properties?: PropTradingProtocol.IPingMsg): PropTradingProtocol.PingMsg;

        /**
         * Encodes the specified PingMsg message. Does not implicitly {@link PropTradingProtocol.PingMsg.verify|verify} messages.
         * @param message PingMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IPingMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.PingMsg.verify|verify} messages.
         * @param message PingMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IPingMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.PingMsg;

        /**
         * Decodes a PingMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.PingMsg;

        /**
         * Verifies a PingMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PingMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PingMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.PingMsg;

        /**
         * Creates a plain object from a PingMsg message. Also converts values to other types if specified.
         * @param message PingMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.PingMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PingMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PingMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PongMsg. */
    interface IPongMsg {

        /** PongMsg Connected */
        Connected?: (boolean|null);

        /** PongMsg AckValue */
        AckValue?: (number|Long|null);
    }

    /** Represents a PongMsg. */
    class PongMsg implements IPongMsg {

        /**
         * Constructs a new PongMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IPongMsg);

        /** PongMsg Connected. */
        public Connected: boolean;

        /** PongMsg AckValue. */
        public AckValue: (number|Long);

        /**
         * Creates a new PongMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PongMsg instance
         */
        public static create(properties?: PropTradingProtocol.IPongMsg): PropTradingProtocol.PongMsg;

        /**
         * Encodes the specified PongMsg message. Does not implicitly {@link PropTradingProtocol.PongMsg.verify|verify} messages.
         * @param message PongMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IPongMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PongMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.PongMsg.verify|verify} messages.
         * @param message PongMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IPongMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PongMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PongMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.PongMsg;

        /**
         * Decodes a PongMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PongMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.PongMsg;

        /**
         * Verifies a PongMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PongMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PongMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.PongMsg;

        /**
         * Creates a plain object from a PongMsg message. Also converts values to other types if specified.
         * @param message PongMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.PongMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PongMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PongMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** SymbolCategoryEnum enum. */
    enum SymbolCategoryEnum {
        Future = 1,
        Forex = 2,
        Index = 3,
        Option = 4,
        Stock = 5,
        CryptoPerpetual = 6,
        Spot = 7,
        Etf = 8
    }

    /** SymbolSpreadTypeEnum enum. */
    enum SymbolSpreadTypeEnum {
        Native = 0,
        BidDifference = 1,
        AskDifference = 2,
        PercentualSpread = 3
    }

    /** Properties of a ContractRequestWrapperMsg. */
    interface IContractRequestWrapperMsg {

        /** ContractRequestWrapperMsg RequestId */
        RequestId?: (number|Long|null);

        /** ContractRequestWrapperMsg Contracts */
        Contracts?: (PropTradingProtocol.IContractReqMsg[]|null);
    }

    /** Represents a ContractRequestWrapperMsg. */
    class ContractRequestWrapperMsg implements IContractRequestWrapperMsg {

        /**
         * Constructs a new ContractRequestWrapperMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IContractRequestWrapperMsg);

        /** ContractRequestWrapperMsg RequestId. */
        public RequestId: (number|Long);

        /** ContractRequestWrapperMsg Contracts. */
        public Contracts: PropTradingProtocol.IContractReqMsg[];

        /**
         * Creates a new ContractRequestWrapperMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContractRequestWrapperMsg instance
         */
        public static create(properties?: PropTradingProtocol.IContractRequestWrapperMsg): PropTradingProtocol.ContractRequestWrapperMsg;

        /**
         * Encodes the specified ContractRequestWrapperMsg message. Does not implicitly {@link PropTradingProtocol.ContractRequestWrapperMsg.verify|verify} messages.
         * @param message ContractRequestWrapperMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IContractRequestWrapperMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContractRequestWrapperMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.ContractRequestWrapperMsg.verify|verify} messages.
         * @param message ContractRequestWrapperMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IContractRequestWrapperMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContractRequestWrapperMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContractRequestWrapperMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.ContractRequestWrapperMsg;

        /**
         * Decodes a ContractRequestWrapperMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContractRequestWrapperMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.ContractRequestWrapperMsg;

        /**
         * Verifies a ContractRequestWrapperMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContractRequestWrapperMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContractRequestWrapperMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.ContractRequestWrapperMsg;

        /**
         * Creates a plain object from a ContractRequestWrapperMsg message. Also converts values to other types if specified.
         * @param message ContractRequestWrapperMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.ContractRequestWrapperMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContractRequestWrapperMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ContractRequestWrapperMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ContractReqMsg. */
    interface IContractReqMsg {

        /** ContractReqMsg FeedSymbol */
        FeedSymbol?: (string|null);

        /** ContractReqMsg Category */
        Category?: (PropTradingProtocol.SymbolCategoryEnum|null);

        /** ContractReqMsg ContractId */
        ContractId?: (number|Long|null);

        /** ContractReqMsg Isin */
        Isin?: (string|null);

        /** ContractReqMsg RequestId */
        RequestId?: (number|Long|null);
    }

    /** Represents a ContractReqMsg. */
    class ContractReqMsg implements IContractReqMsg {

        /**
         * Constructs a new ContractReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IContractReqMsg);

        /** ContractReqMsg FeedSymbol. */
        public FeedSymbol: string;

        /** ContractReqMsg Category. */
        public Category: PropTradingProtocol.SymbolCategoryEnum;

        /** ContractReqMsg ContractId. */
        public ContractId: (number|Long);

        /** ContractReqMsg Isin. */
        public Isin: string;

        /** ContractReqMsg RequestId. */
        public RequestId: (number|Long);

        /**
         * Creates a new ContractReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContractReqMsg instance
         */
        public static create(properties?: PropTradingProtocol.IContractReqMsg): PropTradingProtocol.ContractReqMsg;

        /**
         * Encodes the specified ContractReqMsg message. Does not implicitly {@link PropTradingProtocol.ContractReqMsg.verify|verify} messages.
         * @param message ContractReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IContractReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContractReqMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.ContractReqMsg.verify|verify} messages.
         * @param message ContractReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IContractReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContractReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContractReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.ContractReqMsg;

        /**
         * Decodes a ContractReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContractReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.ContractReqMsg;

        /**
         * Verifies a ContractReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContractReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContractReqMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.ContractReqMsg;

        /**
         * Creates a plain object from a ContractReqMsg message. Also converts values to other types if specified.
         * @param message ContractReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.ContractReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContractReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ContractReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ContractResponseWrapperMsg. */
    interface IContractResponseWrapperMsg {

        /** ContractResponseWrapperMsg RequestId */
        RequestId?: (number|Long|null);

        /** ContractResponseWrapperMsg Contracts */
        Contracts?: (PropTradingProtocol.IContractRespMsg[]|null);
    }

    /** Represents a ContractResponseWrapperMsg. */
    class ContractResponseWrapperMsg implements IContractResponseWrapperMsg {

        /**
         * Constructs a new ContractResponseWrapperMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IContractResponseWrapperMsg);

        /** ContractResponseWrapperMsg RequestId. */
        public RequestId: (number|Long);

        /** ContractResponseWrapperMsg Contracts. */
        public Contracts: PropTradingProtocol.IContractRespMsg[];

        /**
         * Creates a new ContractResponseWrapperMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContractResponseWrapperMsg instance
         */
        public static create(properties?: PropTradingProtocol.IContractResponseWrapperMsg): PropTradingProtocol.ContractResponseWrapperMsg;

        /**
         * Encodes the specified ContractResponseWrapperMsg message. Does not implicitly {@link PropTradingProtocol.ContractResponseWrapperMsg.verify|verify} messages.
         * @param message ContractResponseWrapperMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IContractResponseWrapperMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContractResponseWrapperMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.ContractResponseWrapperMsg.verify|verify} messages.
         * @param message ContractResponseWrapperMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IContractResponseWrapperMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContractResponseWrapperMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContractResponseWrapperMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.ContractResponseWrapperMsg;

        /**
         * Decodes a ContractResponseWrapperMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContractResponseWrapperMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.ContractResponseWrapperMsg;

        /**
         * Verifies a ContractResponseWrapperMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContractResponseWrapperMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContractResponseWrapperMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.ContractResponseWrapperMsg;

        /**
         * Creates a plain object from a ContractResponseWrapperMsg message. Also converts values to other types if specified.
         * @param message ContractResponseWrapperMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.ContractResponseWrapperMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContractResponseWrapperMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ContractResponseWrapperMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ContractRespMsg. */
    interface IContractRespMsg {

        /** ContractRespMsg FeedSymbol */
        FeedSymbol?: (string|null);

        /** ContractRespMsg Category */
        Category?: (PropTradingProtocol.SymbolCategoryEnum|null);

        /** ContractRespMsg ContractId */
        ContractId?: (number|Long|null);

        /** ContractRespMsg contractInfo */
        contractInfo?: (PropTradingProtocol.IContractInfoMsg|null);

        /** ContractRespMsg RequestId */
        RequestId?: (number|Long|null);

        /** ContractRespMsg IsFinal */
        IsFinal?: (boolean|null);
    }

    /** Represents a ContractRespMsg. */
    class ContractRespMsg implements IContractRespMsg {

        /**
         * Constructs a new ContractRespMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IContractRespMsg);

        /** ContractRespMsg FeedSymbol. */
        public FeedSymbol: string;

        /** ContractRespMsg Category. */
        public Category: PropTradingProtocol.SymbolCategoryEnum;

        /** ContractRespMsg ContractId. */
        public ContractId: (number|Long);

        /** ContractRespMsg contractInfo. */
        public contractInfo?: (PropTradingProtocol.IContractInfoMsg|null);

        /** ContractRespMsg RequestId. */
        public RequestId: (number|Long);

        /** ContractRespMsg IsFinal. */
        public IsFinal: boolean;

        /**
         * Creates a new ContractRespMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContractRespMsg instance
         */
        public static create(properties?: PropTradingProtocol.IContractRespMsg): PropTradingProtocol.ContractRespMsg;

        /**
         * Encodes the specified ContractRespMsg message. Does not implicitly {@link PropTradingProtocol.ContractRespMsg.verify|verify} messages.
         * @param message ContractRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IContractRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContractRespMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.ContractRespMsg.verify|verify} messages.
         * @param message ContractRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IContractRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContractRespMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContractRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.ContractRespMsg;

        /**
         * Decodes a ContractRespMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContractRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.ContractRespMsg;

        /**
         * Verifies a ContractRespMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContractRespMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContractRespMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.ContractRespMsg;

        /**
         * Creates a plain object from a ContractRespMsg message. Also converts values to other types if specified.
         * @param message ContractRespMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.ContractRespMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContractRespMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ContractRespMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ContractInfoMsg. */
    interface IContractInfoMsg {

        /** ContractInfoMsg ContractName */
        ContractName?: (string|null);

        /** ContractInfoMsg Symbol */
        Symbol?: (string|null);

        /** ContractInfoMsg Exchange */
        Exchange?: (string|null);

        /** ContractInfoMsg Description */
        Description?: (string|null);

        /** ContractInfoMsg TickSize */
        TickSize?: (number|null);

        /** ContractInfoMsg TickValue */
        TickValue?: (number|null);

        /** ContractInfoMsg IsStock */
        IsStock?: (boolean|null);

        /** ContractInfoMsg FeedSymbol */
        FeedSymbol?: (string|null);

        /** ContractInfoMsg TradableQuantityFractionable */
        TradableQuantityFractionable?: (number|null);

        /** ContractInfoMsg TradableQuantityMultiplier */
        TradableQuantityMultiplier?: (number|null);

        /** ContractInfoMsg ContractId */
        ContractId?: (number|Long|null);

        /** ContractInfoMsg SymbolId */
        SymbolId?: (number|Long|null);

        /** ContractInfoMsg QuoteCurrency */
        QuoteCurrency?: (string|null);

        /** ContractInfoMsg BaseCurrency */
        BaseCurrency?: (string|null);

        /** ContractInfoMsg TradableQuantityMinimum */
        TradableQuantityMinimum?: (number|null);

        /** ContractInfoMsg TradableQuantityMultiple */
        TradableQuantityMultiple?: (number|null);
    }

    /** Represents a ContractInfoMsg. */
    class ContractInfoMsg implements IContractInfoMsg {

        /**
         * Constructs a new ContractInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IContractInfoMsg);

        /** ContractInfoMsg ContractName. */
        public ContractName: string;

        /** ContractInfoMsg Symbol. */
        public Symbol: string;

        /** ContractInfoMsg Exchange. */
        public Exchange: string;

        /** ContractInfoMsg Description. */
        public Description: string;

        /** ContractInfoMsg TickSize. */
        public TickSize: number;

        /** ContractInfoMsg TickValue. */
        public TickValue: number;

        /** ContractInfoMsg IsStock. */
        public IsStock: boolean;

        /** ContractInfoMsg FeedSymbol. */
        public FeedSymbol: string;

        /** ContractInfoMsg TradableQuantityFractionable. */
        public TradableQuantityFractionable: number;

        /** ContractInfoMsg TradableQuantityMultiplier. */
        public TradableQuantityMultiplier: number;

        /** ContractInfoMsg ContractId. */
        public ContractId: (number|Long);

        /** ContractInfoMsg SymbolId. */
        public SymbolId: (number|Long);

        /** ContractInfoMsg QuoteCurrency. */
        public QuoteCurrency: string;

        /** ContractInfoMsg BaseCurrency. */
        public BaseCurrency: string;

        /** ContractInfoMsg TradableQuantityMinimum. */
        public TradableQuantityMinimum: number;

        /** ContractInfoMsg TradableQuantityMultiple. */
        public TradableQuantityMultiple: number;

        /**
         * Creates a new ContractInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContractInfoMsg instance
         */
        public static create(properties?: PropTradingProtocol.IContractInfoMsg): PropTradingProtocol.ContractInfoMsg;

        /**
         * Encodes the specified ContractInfoMsg message. Does not implicitly {@link PropTradingProtocol.ContractInfoMsg.verify|verify} messages.
         * @param message ContractInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IContractInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContractInfoMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.ContractInfoMsg.verify|verify} messages.
         * @param message ContractInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IContractInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContractInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContractInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.ContractInfoMsg;

        /**
         * Decodes a ContractInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContractInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.ContractInfoMsg;

        /**
         * Verifies a ContractInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContractInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContractInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.ContractInfoMsg;

        /**
         * Creates a plain object from a ContractInfoMsg message. Also converts values to other types if specified.
         * @param message ContractInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.ContractInfoMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContractInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ContractInfoMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountTradingSymbolMultiReqMsg. */
    interface IAccountTradingSymbolMultiReqMsg {

        /** AccountTradingSymbolMultiReqMsg RequestId */
        RequestId?: (number|Long|null);

        /** AccountTradingSymbolMultiReqMsg AccountId */
        AccountId?: (number|Long|null);

        /** AccountTradingSymbolMultiReqMsg Symbols */
        Symbols?: (PropTradingProtocol.ITradingSymbolParamReqMsg[]|null);
    }

    /** Represents an AccountTradingSymbolMultiReqMsg. */
    class AccountTradingSymbolMultiReqMsg implements IAccountTradingSymbolMultiReqMsg {

        /**
         * Constructs a new AccountTradingSymbolMultiReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountTradingSymbolMultiReqMsg);

        /** AccountTradingSymbolMultiReqMsg RequestId. */
        public RequestId: (number|Long);

        /** AccountTradingSymbolMultiReqMsg AccountId. */
        public AccountId: (number|Long);

        /** AccountTradingSymbolMultiReqMsg Symbols. */
        public Symbols: PropTradingProtocol.ITradingSymbolParamReqMsg[];

        /**
         * Creates a new AccountTradingSymbolMultiReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountTradingSymbolMultiReqMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountTradingSymbolMultiReqMsg): PropTradingProtocol.AccountTradingSymbolMultiReqMsg;

        /**
         * Encodes the specified AccountTradingSymbolMultiReqMsg message. Does not implicitly {@link PropTradingProtocol.AccountTradingSymbolMultiReqMsg.verify|verify} messages.
         * @param message AccountTradingSymbolMultiReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountTradingSymbolMultiReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountTradingSymbolMultiReqMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountTradingSymbolMultiReqMsg.verify|verify} messages.
         * @param message AccountTradingSymbolMultiReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountTradingSymbolMultiReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountTradingSymbolMultiReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountTradingSymbolMultiReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountTradingSymbolMultiReqMsg;

        /**
         * Decodes an AccountTradingSymbolMultiReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountTradingSymbolMultiReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountTradingSymbolMultiReqMsg;

        /**
         * Verifies an AccountTradingSymbolMultiReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountTradingSymbolMultiReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountTradingSymbolMultiReqMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountTradingSymbolMultiReqMsg;

        /**
         * Creates a plain object from an AccountTradingSymbolMultiReqMsg message. Also converts values to other types if specified.
         * @param message AccountTradingSymbolMultiReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountTradingSymbolMultiReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountTradingSymbolMultiReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountTradingSymbolMultiReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TradingSymbolParamReqMsg. */
    interface ITradingSymbolParamReqMsg {

        /** TradingSymbolParamReqMsg FeedSymbol */
        FeedSymbol?: (string|null);

        /** TradingSymbolParamReqMsg ContractId */
        ContractId?: (number|Long|null);
    }

    /** Represents a TradingSymbolParamReqMsg. */
    class TradingSymbolParamReqMsg implements ITradingSymbolParamReqMsg {

        /**
         * Constructs a new TradingSymbolParamReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ITradingSymbolParamReqMsg);

        /** TradingSymbolParamReqMsg FeedSymbol. */
        public FeedSymbol: string;

        /** TradingSymbolParamReqMsg ContractId. */
        public ContractId: (number|Long);

        /**
         * Creates a new TradingSymbolParamReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TradingSymbolParamReqMsg instance
         */
        public static create(properties?: PropTradingProtocol.ITradingSymbolParamReqMsg): PropTradingProtocol.TradingSymbolParamReqMsg;

        /**
         * Encodes the specified TradingSymbolParamReqMsg message. Does not implicitly {@link PropTradingProtocol.TradingSymbolParamReqMsg.verify|verify} messages.
         * @param message TradingSymbolParamReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ITradingSymbolParamReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TradingSymbolParamReqMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.TradingSymbolParamReqMsg.verify|verify} messages.
         * @param message TradingSymbolParamReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ITradingSymbolParamReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TradingSymbolParamReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TradingSymbolParamReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.TradingSymbolParamReqMsg;

        /**
         * Decodes a TradingSymbolParamReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TradingSymbolParamReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.TradingSymbolParamReqMsg;

        /**
         * Verifies a TradingSymbolParamReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TradingSymbolParamReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TradingSymbolParamReqMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.TradingSymbolParamReqMsg;

        /**
         * Creates a plain object from a TradingSymbolParamReqMsg message. Also converts values to other types if specified.
         * @param message TradingSymbolParamReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.TradingSymbolParamReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TradingSymbolParamReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TradingSymbolParamReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountTradingSymbolMultiRespMsg. */
    interface IAccountTradingSymbolMultiRespMsg {

        /** AccountTradingSymbolMultiRespMsg RequestId */
        RequestId?: (number|Long|null);

        /** AccountTradingSymbolMultiRespMsg Success */
        Success?: (boolean|null);

        /** AccountTradingSymbolMultiRespMsg Reason */
        Reason?: (string|null);

        /** AccountTradingSymbolMultiRespMsg Infos */
        Infos?: (PropTradingProtocol.IAccountTradingSymbolInfoMsg[]|null);
    }

    /** Represents an AccountTradingSymbolMultiRespMsg. */
    class AccountTradingSymbolMultiRespMsg implements IAccountTradingSymbolMultiRespMsg {

        /**
         * Constructs a new AccountTradingSymbolMultiRespMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountTradingSymbolMultiRespMsg);

        /** AccountTradingSymbolMultiRespMsg RequestId. */
        public RequestId: (number|Long);

        /** AccountTradingSymbolMultiRespMsg Success. */
        public Success: boolean;

        /** AccountTradingSymbolMultiRespMsg Reason. */
        public Reason: string;

        /** AccountTradingSymbolMultiRespMsg Infos. */
        public Infos: PropTradingProtocol.IAccountTradingSymbolInfoMsg[];

        /**
         * Creates a new AccountTradingSymbolMultiRespMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountTradingSymbolMultiRespMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountTradingSymbolMultiRespMsg): PropTradingProtocol.AccountTradingSymbolMultiRespMsg;

        /**
         * Encodes the specified AccountTradingSymbolMultiRespMsg message. Does not implicitly {@link PropTradingProtocol.AccountTradingSymbolMultiRespMsg.verify|verify} messages.
         * @param message AccountTradingSymbolMultiRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountTradingSymbolMultiRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountTradingSymbolMultiRespMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountTradingSymbolMultiRespMsg.verify|verify} messages.
         * @param message AccountTradingSymbolMultiRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountTradingSymbolMultiRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountTradingSymbolMultiRespMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountTradingSymbolMultiRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountTradingSymbolMultiRespMsg;

        /**
         * Decodes an AccountTradingSymbolMultiRespMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountTradingSymbolMultiRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountTradingSymbolMultiRespMsg;

        /**
         * Verifies an AccountTradingSymbolMultiRespMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountTradingSymbolMultiRespMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountTradingSymbolMultiRespMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountTradingSymbolMultiRespMsg;

        /**
         * Creates a plain object from an AccountTradingSymbolMultiRespMsg message. Also converts values to other types if specified.
         * @param message AccountTradingSymbolMultiRespMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountTradingSymbolMultiRespMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountTradingSymbolMultiRespMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountTradingSymbolMultiRespMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountTradingSymbolInfoReqMsg. */
    interface IAccountTradingSymbolInfoReqMsg {

        /** AccountTradingSymbolInfoReqMsg RequestId */
        RequestId?: (number|Long|null);

        /** AccountTradingSymbolInfoReqMsg AccountId */
        AccountId?: (number|Long|null);

        /** AccountTradingSymbolInfoReqMsg FeedSymbol */
        FeedSymbol?: (string|null);

        /** AccountTradingSymbolInfoReqMsg ContractId */
        ContractId?: (number|Long|null);
    }

    /** Represents an AccountTradingSymbolInfoReqMsg. */
    class AccountTradingSymbolInfoReqMsg implements IAccountTradingSymbolInfoReqMsg {

        /**
         * Constructs a new AccountTradingSymbolInfoReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountTradingSymbolInfoReqMsg);

        /** AccountTradingSymbolInfoReqMsg RequestId. */
        public RequestId: (number|Long);

        /** AccountTradingSymbolInfoReqMsg AccountId. */
        public AccountId: (number|Long);

        /** AccountTradingSymbolInfoReqMsg FeedSymbol. */
        public FeedSymbol: string;

        /** AccountTradingSymbolInfoReqMsg ContractId. */
        public ContractId: (number|Long);

        /**
         * Creates a new AccountTradingSymbolInfoReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountTradingSymbolInfoReqMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountTradingSymbolInfoReqMsg): PropTradingProtocol.AccountTradingSymbolInfoReqMsg;

        /**
         * Encodes the specified AccountTradingSymbolInfoReqMsg message. Does not implicitly {@link PropTradingProtocol.AccountTradingSymbolInfoReqMsg.verify|verify} messages.
         * @param message AccountTradingSymbolInfoReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountTradingSymbolInfoReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountTradingSymbolInfoReqMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountTradingSymbolInfoReqMsg.verify|verify} messages.
         * @param message AccountTradingSymbolInfoReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountTradingSymbolInfoReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountTradingSymbolInfoReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountTradingSymbolInfoReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountTradingSymbolInfoReqMsg;

        /**
         * Decodes an AccountTradingSymbolInfoReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountTradingSymbolInfoReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountTradingSymbolInfoReqMsg;

        /**
         * Verifies an AccountTradingSymbolInfoReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountTradingSymbolInfoReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountTradingSymbolInfoReqMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountTradingSymbolInfoReqMsg;

        /**
         * Creates a plain object from an AccountTradingSymbolInfoReqMsg message. Also converts values to other types if specified.
         * @param message AccountTradingSymbolInfoReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountTradingSymbolInfoReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountTradingSymbolInfoReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountTradingSymbolInfoReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountTradingSymbolInfoRespMsg. */
    interface IAccountTradingSymbolInfoRespMsg {

        /** AccountTradingSymbolInfoRespMsg RequestId */
        RequestId?: (number|Long|null);

        /** AccountTradingSymbolInfoRespMsg Success */
        Success?: (boolean|null);

        /** AccountTradingSymbolInfoRespMsg Reason */
        Reason?: (string|null);

        /** AccountTradingSymbolInfoRespMsg Info */
        Info?: (PropTradingProtocol.IAccountTradingSymbolInfoMsg|null);
    }

    /** Represents an AccountTradingSymbolInfoRespMsg. */
    class AccountTradingSymbolInfoRespMsg implements IAccountTradingSymbolInfoRespMsg {

        /**
         * Constructs a new AccountTradingSymbolInfoRespMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountTradingSymbolInfoRespMsg);

        /** AccountTradingSymbolInfoRespMsg RequestId. */
        public RequestId: (number|Long);

        /** AccountTradingSymbolInfoRespMsg Success. */
        public Success: boolean;

        /** AccountTradingSymbolInfoRespMsg Reason. */
        public Reason: string;

        /** AccountTradingSymbolInfoRespMsg Info. */
        public Info?: (PropTradingProtocol.IAccountTradingSymbolInfoMsg|null);

        /**
         * Creates a new AccountTradingSymbolInfoRespMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountTradingSymbolInfoRespMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountTradingSymbolInfoRespMsg): PropTradingProtocol.AccountTradingSymbolInfoRespMsg;

        /**
         * Encodes the specified AccountTradingSymbolInfoRespMsg message. Does not implicitly {@link PropTradingProtocol.AccountTradingSymbolInfoRespMsg.verify|verify} messages.
         * @param message AccountTradingSymbolInfoRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountTradingSymbolInfoRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountTradingSymbolInfoRespMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountTradingSymbolInfoRespMsg.verify|verify} messages.
         * @param message AccountTradingSymbolInfoRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountTradingSymbolInfoRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountTradingSymbolInfoRespMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountTradingSymbolInfoRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountTradingSymbolInfoRespMsg;

        /**
         * Decodes an AccountTradingSymbolInfoRespMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountTradingSymbolInfoRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountTradingSymbolInfoRespMsg;

        /**
         * Verifies an AccountTradingSymbolInfoRespMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountTradingSymbolInfoRespMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountTradingSymbolInfoRespMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountTradingSymbolInfoRespMsg;

        /**
         * Creates a plain object from an AccountTradingSymbolInfoRespMsg message. Also converts values to other types if specified.
         * @param message AccountTradingSymbolInfoRespMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountTradingSymbolInfoRespMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountTradingSymbolInfoRespMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountTradingSymbolInfoRespMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountTradingSymbolInfoMsg. */
    interface IAccountTradingSymbolInfoMsg {

        /** AccountTradingSymbolInfoMsg AccountId */
        AccountId?: (number|Long|null);

        /** AccountTradingSymbolInfoMsg SymbolId */
        SymbolId?: (number|Long|null);

        /** AccountTradingSymbolInfoMsg Commissions */
        Commissions?: (number|null);

        /** AccountTradingSymbolInfoMsg Margin */
        Margin?: (number|null);

        /** AccountTradingSymbolInfoMsg Leverage */
        Leverage?: (number|null);

        /** AccountTradingSymbolInfoMsg SpreadType */
        SpreadType?: (PropTradingProtocol.SymbolSpreadTypeEnum|null);

        /** AccountTradingSymbolInfoMsg SpreadTickValue */
        SpreadTickValue?: (number|null);

        /** AccountTradingSymbolInfoMsg TradableQuantityFractionable */
        TradableQuantityFractionable?: (number|null);

        /** AccountTradingSymbolInfoMsg TradableQuantityMultiplier */
        TradableQuantityMultiplier?: (number|null);

        /** AccountTradingSymbolInfoMsg QuoteCurrency */
        QuoteCurrency?: (string|null);

        /** AccountTradingSymbolInfoMsg BaseCurrency */
        BaseCurrency?: (string|null);

        /** AccountTradingSymbolInfoMsg ContractId */
        ContractId?: (number|Long|null);

        /** AccountTradingSymbolInfoMsg FeedSymbol */
        FeedSymbol?: (string|null);
    }

    /** Represents an AccountTradingSymbolInfoMsg. */
    class AccountTradingSymbolInfoMsg implements IAccountTradingSymbolInfoMsg {

        /**
         * Constructs a new AccountTradingSymbolInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountTradingSymbolInfoMsg);

        /** AccountTradingSymbolInfoMsg AccountId. */
        public AccountId: (number|Long);

        /** AccountTradingSymbolInfoMsg SymbolId. */
        public SymbolId: (number|Long);

        /** AccountTradingSymbolInfoMsg Commissions. */
        public Commissions: number;

        /** AccountTradingSymbolInfoMsg Margin. */
        public Margin: number;

        /** AccountTradingSymbolInfoMsg Leverage. */
        public Leverage: number;

        /** AccountTradingSymbolInfoMsg SpreadType. */
        public SpreadType: PropTradingProtocol.SymbolSpreadTypeEnum;

        /** AccountTradingSymbolInfoMsg SpreadTickValue. */
        public SpreadTickValue: number;

        /** AccountTradingSymbolInfoMsg TradableQuantityFractionable. */
        public TradableQuantityFractionable: number;

        /** AccountTradingSymbolInfoMsg TradableQuantityMultiplier. */
        public TradableQuantityMultiplier: number;

        /** AccountTradingSymbolInfoMsg QuoteCurrency. */
        public QuoteCurrency: string;

        /** AccountTradingSymbolInfoMsg BaseCurrency. */
        public BaseCurrency: string;

        /** AccountTradingSymbolInfoMsg ContractId. */
        public ContractId: (number|Long);

        /** AccountTradingSymbolInfoMsg FeedSymbol. */
        public FeedSymbol: string;

        /**
         * Creates a new AccountTradingSymbolInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountTradingSymbolInfoMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountTradingSymbolInfoMsg): PropTradingProtocol.AccountTradingSymbolInfoMsg;

        /**
         * Encodes the specified AccountTradingSymbolInfoMsg message. Does not implicitly {@link PropTradingProtocol.AccountTradingSymbolInfoMsg.verify|verify} messages.
         * @param message AccountTradingSymbolInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountTradingSymbolInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountTradingSymbolInfoMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountTradingSymbolInfoMsg.verify|verify} messages.
         * @param message AccountTradingSymbolInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountTradingSymbolInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountTradingSymbolInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountTradingSymbolInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountTradingSymbolInfoMsg;

        /**
         * Decodes an AccountTradingSymbolInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountTradingSymbolInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountTradingSymbolInfoMsg;

        /**
         * Verifies an AccountTradingSymbolInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountTradingSymbolInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountTradingSymbolInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountTradingSymbolInfoMsg;

        /**
         * Creates a plain object from an AccountTradingSymbolInfoMsg message. Also converts values to other types if specified.
         * @param message AccountTradingSymbolInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountTradingSymbolInfoMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountTradingSymbolInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountTradingSymbolInfoMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DailyPlReqMsg. */
    interface IDailyPlReqMsg {

        /** DailyPlReqMsg ContractId */
        ContractId?: (number|Long|null);

        /** DailyPlReqMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** DailyPlReqMsg RequestId */
        RequestId?: (number|Long|null);
    }

    /** Represents a DailyPlReqMsg. */
    class DailyPlReqMsg implements IDailyPlReqMsg {

        /**
         * Constructs a new DailyPlReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IDailyPlReqMsg);

        /** DailyPlReqMsg ContractId. */
        public ContractId: (number|Long);

        /** DailyPlReqMsg AccNumber. */
        public AccNumber: (number|Long);

        /** DailyPlReqMsg RequestId. */
        public RequestId: (number|Long);

        /**
         * Creates a new DailyPlReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DailyPlReqMsg instance
         */
        public static create(properties?: PropTradingProtocol.IDailyPlReqMsg): PropTradingProtocol.DailyPlReqMsg;

        /**
         * Encodes the specified DailyPlReqMsg message. Does not implicitly {@link PropTradingProtocol.DailyPlReqMsg.verify|verify} messages.
         * @param message DailyPlReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IDailyPlReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DailyPlReqMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.DailyPlReqMsg.verify|verify} messages.
         * @param message DailyPlReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IDailyPlReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailyPlReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DailyPlReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.DailyPlReqMsg;

        /**
         * Decodes a DailyPlReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DailyPlReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.DailyPlReqMsg;

        /**
         * Verifies a DailyPlReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DailyPlReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DailyPlReqMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.DailyPlReqMsg;

        /**
         * Creates a plain object from a DailyPlReqMsg message. Also converts values to other types if specified.
         * @param message DailyPlReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.DailyPlReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DailyPlReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DailyPlReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DailyPlRespMsg. */
    interface IDailyPlRespMsg {

        /** DailyPlRespMsg ContractId */
        ContractId?: (number|Long|null);

        /** DailyPlRespMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** DailyPlRespMsg DailyPl */
        DailyPl?: (number|null);

        /** DailyPlRespMsg FeedSymbol */
        FeedSymbol?: (string|null);

        /** DailyPlRespMsg RequestId */
        RequestId?: (number|Long|null);

        /** DailyPlRespMsg DailyNetPl */
        DailyNetPl?: (number|null);

        /** DailyPlRespMsg Isin */
        Isin?: (string|null);

        /** DailyPlRespMsg ConvertedDailyPl */
        ConvertedDailyPl?: (number|null);

        /** DailyPlRespMsg ConvertedDailyNetPl */
        ConvertedDailyNetPl?: (number|null);
    }

    /** Represents a DailyPlRespMsg. */
    class DailyPlRespMsg implements IDailyPlRespMsg {

        /**
         * Constructs a new DailyPlRespMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IDailyPlRespMsg);

        /** DailyPlRespMsg ContractId. */
        public ContractId: (number|Long);

        /** DailyPlRespMsg AccNumber. */
        public AccNumber: (number|Long);

        /** DailyPlRespMsg DailyPl. */
        public DailyPl: number;

        /** DailyPlRespMsg FeedSymbol. */
        public FeedSymbol: string;

        /** DailyPlRespMsg RequestId. */
        public RequestId: (number|Long);

        /** DailyPlRespMsg DailyNetPl. */
        public DailyNetPl: number;

        /** DailyPlRespMsg Isin. */
        public Isin: string;

        /** DailyPlRespMsg ConvertedDailyPl. */
        public ConvertedDailyPl: number;

        /** DailyPlRespMsg ConvertedDailyNetPl. */
        public ConvertedDailyNetPl: number;

        /**
         * Creates a new DailyPlRespMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DailyPlRespMsg instance
         */
        public static create(properties?: PropTradingProtocol.IDailyPlRespMsg): PropTradingProtocol.DailyPlRespMsg;

        /**
         * Encodes the specified DailyPlRespMsg message. Does not implicitly {@link PropTradingProtocol.DailyPlRespMsg.verify|verify} messages.
         * @param message DailyPlRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IDailyPlRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DailyPlRespMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.DailyPlRespMsg.verify|verify} messages.
         * @param message DailyPlRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IDailyPlRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailyPlRespMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DailyPlRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.DailyPlRespMsg;

        /**
         * Decodes a DailyPlRespMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DailyPlRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.DailyPlRespMsg;

        /**
         * Verifies a DailyPlRespMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DailyPlRespMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DailyPlRespMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.DailyPlRespMsg;

        /**
         * Creates a plain object from a DailyPlRespMsg message. Also converts values to other types if specified.
         * @param message DailyPlRespMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.DailyPlRespMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DailyPlRespMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DailyPlRespMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** InfoModeEnum enum. */
    enum InfoModeEnum {
        Account = 1,
        OrdAndPos = 2,
        Positions = 3,
        AccountTradingSymbols = 4
    }

    /** AccountModeEnum enum. */
    enum AccountModeEnum {
        EVALUATION = 0,
        SIM_FUNDED = 1,
        FUNDED = 2,
        LIVE = 3,
        TRIAL = 4,
        CONTEST = 5,
        TRAINING = 100
    }

    /** AccountStatusEnum enum. */
    enum AccountStatusEnum {
        ALL = -1,
        INITIALIZED = 0,
        ENABLED = 1,
        SUCCESS = 2,
        FAILED = 4,
        DISABLED = 8
    }

    /** AccountPermissionEnum enum. */
    enum AccountPermissionEnum {
        Trading = 0,
        ReadOnly = 1,
        RiskPause = 2,
        LiquidateOnly = 3
    }

    /** Properties of an InfoReqMsg. */
    interface IInfoReqMsg {

        /** InfoReqMsg Mode */
        Mode?: (PropTradingProtocol.InfoModeEnum|null);

        /** InfoReqMsg RequestId */
        RequestId?: (number|Long|null);

        /** InfoReqMsg AccountListFilterStatus */
        AccountListFilterStatus?: (PropTradingProtocol.AccountStatusEnum|null);

        /** InfoReqMsg Accounts */
        Accounts?: ((number|Long)[]|null);

        /** InfoReqMsg Modes */
        Modes?: (PropTradingProtocol.InfoModeEnum[]|null);
    }

    /** Represents an InfoReqMsg. */
    class InfoReqMsg implements IInfoReqMsg {

        /**
         * Constructs a new InfoReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IInfoReqMsg);

        /** InfoReqMsg Mode. */
        public Mode: PropTradingProtocol.InfoModeEnum;

        /** InfoReqMsg RequestId. */
        public RequestId: (number|Long);

        /** InfoReqMsg AccountListFilterStatus. */
        public AccountListFilterStatus: PropTradingProtocol.AccountStatusEnum;

        /** InfoReqMsg Accounts. */
        public Accounts: (number|Long)[];

        /** InfoReqMsg Modes. */
        public Modes: PropTradingProtocol.InfoModeEnum[];

        /**
         * Creates a new InfoReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InfoReqMsg instance
         */
        public static create(properties?: PropTradingProtocol.IInfoReqMsg): PropTradingProtocol.InfoReqMsg;

        /**
         * Encodes the specified InfoReqMsg message. Does not implicitly {@link PropTradingProtocol.InfoReqMsg.verify|verify} messages.
         * @param message InfoReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IInfoReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InfoReqMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.InfoReqMsg.verify|verify} messages.
         * @param message InfoReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IInfoReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InfoReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InfoReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.InfoReqMsg;

        /**
         * Decodes an InfoReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InfoReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.InfoReqMsg;

        /**
         * Verifies an InfoReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InfoReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InfoReqMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.InfoReqMsg;

        /**
         * Creates a plain object from an InfoReqMsg message. Also converts values to other types if specified.
         * @param message InfoReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.InfoReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InfoReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InfoReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an InfoRespMsg. */
    interface IInfoRespMsg {

        /** InfoRespMsg AccountList */
        AccountList?: (PropTradingProtocol.IAccountHeaderMsg[]|null);

        /** InfoRespMsg OrderList */
        OrderList?: (PropTradingProtocol.IOrderInfoMsg[]|null);

        /** InfoRespMsg RequestId */
        RequestId?: (number|Long|null);

        /** InfoRespMsg PositionList */
        PositionList?: (PropTradingProtocol.IPositionInfoMsg[]|null);

        /** InfoRespMsg BracketList */
        BracketList?: (PropTradingProtocol.IBracketInfoMsg[]|null);

        /** InfoRespMsg AccountTradingSymbolList */
        AccountTradingSymbolList?: (PropTradingProtocol.IAccountTradingSymbolInfoMsg[]|null);
    }

    /** Represents an InfoRespMsg. */
    class InfoRespMsg implements IInfoRespMsg {

        /**
         * Constructs a new InfoRespMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IInfoRespMsg);

        /** InfoRespMsg AccountList. */
        public AccountList: PropTradingProtocol.IAccountHeaderMsg[];

        /** InfoRespMsg OrderList. */
        public OrderList: PropTradingProtocol.IOrderInfoMsg[];

        /** InfoRespMsg RequestId. */
        public RequestId: (number|Long);

        /** InfoRespMsg PositionList. */
        public PositionList: PropTradingProtocol.IPositionInfoMsg[];

        /** InfoRespMsg BracketList. */
        public BracketList: PropTradingProtocol.IBracketInfoMsg[];

        /** InfoRespMsg AccountTradingSymbolList. */
        public AccountTradingSymbolList: PropTradingProtocol.IAccountTradingSymbolInfoMsg[];

        /**
         * Creates a new InfoRespMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InfoRespMsg instance
         */
        public static create(properties?: PropTradingProtocol.IInfoRespMsg): PropTradingProtocol.InfoRespMsg;

        /**
         * Encodes the specified InfoRespMsg message. Does not implicitly {@link PropTradingProtocol.InfoRespMsg.verify|verify} messages.
         * @param message InfoRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IInfoRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InfoRespMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.InfoRespMsg.verify|verify} messages.
         * @param message InfoRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IInfoRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InfoRespMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InfoRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.InfoRespMsg;

        /**
         * Decodes an InfoRespMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InfoRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.InfoRespMsg;

        /**
         * Verifies an InfoRespMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InfoRespMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InfoRespMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.InfoRespMsg;

        /**
         * Creates a plain object from an InfoRespMsg message. Also converts values to other types if specified.
         * @param message InfoRespMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.InfoRespMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InfoRespMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InfoRespMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountHeaderMsg. */
    interface IAccountHeaderMsg {

        /** AccountHeaderMsg accountNumber */
        accountNumber?: (number|Long|null);

        /** AccountHeaderMsg accountHeader */
        accountHeader?: (string|null);

        /** AccountHeaderMsg accountDescription */
        accountDescription?: (string|null);

        /** AccountHeaderMsg Balance */
        Balance?: (PropTradingProtocol.IBalanceMsg|null);

        /** AccountHeaderMsg IsEnabled */
        IsEnabled?: (boolean|null);

        /** AccountHeaderMsg Status */
        Status?: (PropTradingProtocol.AccountStatusEnum|null);

        /** AccountHeaderMsg IsTradingEnabled */
        IsTradingEnabled?: (boolean|null);

        /** AccountHeaderMsg IsHedging */
        IsHedging?: (boolean|null);

        /** AccountHeaderMsg AccountReferenceId */
        AccountReferenceId?: (string|null);

        /** AccountHeaderMsg Permission */
        Permission?: (PropTradingProtocol.AccountPermissionEnum|null);

        /** AccountHeaderMsg Currency */
        Currency?: (string|null);

        /** AccountHeaderMsg Archived */
        Archived?: (boolean|null);

        /** AccountHeaderMsg UserRiskRuleEnabled */
        UserRiskRuleEnabled?: (boolean|null);

        /** AccountHeaderMsg UserDailyLockoutEnabled */
        UserDailyLockoutEnabled?: (boolean|null);

        /** AccountHeaderMsg IsTradeCopierAllowed */
        IsTradeCopierAllowed?: (boolean|null);

        /** AccountHeaderMsg OrganizationId */
        OrganizationId?: (number|Long|null);

        /** AccountHeaderMsg OrganizationName */
        OrganizationName?: (string|null);

        /** AccountHeaderMsg Mode */
        Mode?: (PropTradingProtocol.AccountModeEnum|null);
    }

    /** Represents an AccountHeaderMsg. */
    class AccountHeaderMsg implements IAccountHeaderMsg {

        /**
         * Constructs a new AccountHeaderMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountHeaderMsg);

        /** AccountHeaderMsg accountNumber. */
        public accountNumber: (number|Long);

        /** AccountHeaderMsg accountHeader. */
        public accountHeader: string;

        /** AccountHeaderMsg accountDescription. */
        public accountDescription: string;

        /** AccountHeaderMsg Balance. */
        public Balance?: (PropTradingProtocol.IBalanceMsg|null);

        /** AccountHeaderMsg IsEnabled. */
        public IsEnabled: boolean;

        /** AccountHeaderMsg Status. */
        public Status: PropTradingProtocol.AccountStatusEnum;

        /** AccountHeaderMsg IsTradingEnabled. */
        public IsTradingEnabled: boolean;

        /** AccountHeaderMsg IsHedging. */
        public IsHedging: boolean;

        /** AccountHeaderMsg AccountReferenceId. */
        public AccountReferenceId: string;

        /** AccountHeaderMsg Permission. */
        public Permission: PropTradingProtocol.AccountPermissionEnum;

        /** AccountHeaderMsg Currency. */
        public Currency: string;

        /** AccountHeaderMsg Archived. */
        public Archived: boolean;

        /** AccountHeaderMsg UserRiskRuleEnabled. */
        public UserRiskRuleEnabled: boolean;

        /** AccountHeaderMsg UserDailyLockoutEnabled. */
        public UserDailyLockoutEnabled: boolean;

        /** AccountHeaderMsg IsTradeCopierAllowed. */
        public IsTradeCopierAllowed: boolean;

        /** AccountHeaderMsg OrganizationId. */
        public OrganizationId: (number|Long);

        /** AccountHeaderMsg OrganizationName. */
        public OrganizationName: string;

        /** AccountHeaderMsg Mode. */
        public Mode: PropTradingProtocol.AccountModeEnum;

        /**
         * Creates a new AccountHeaderMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountHeaderMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountHeaderMsg): PropTradingProtocol.AccountHeaderMsg;

        /**
         * Encodes the specified AccountHeaderMsg message. Does not implicitly {@link PropTradingProtocol.AccountHeaderMsg.verify|verify} messages.
         * @param message AccountHeaderMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountHeaderMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountHeaderMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountHeaderMsg.verify|verify} messages.
         * @param message AccountHeaderMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountHeaderMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountHeaderMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountHeaderMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountHeaderMsg;

        /**
         * Decodes an AccountHeaderMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountHeaderMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountHeaderMsg;

        /**
         * Verifies an AccountHeaderMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountHeaderMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountHeaderMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountHeaderMsg;

        /**
         * Creates a plain object from an AccountHeaderMsg message. Also converts values to other types if specified.
         * @param message AccountHeaderMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountHeaderMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountHeaderMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountHeaderMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountSubscribeReqMsg. */
    interface IAccountSubscribeReqMsg {

        /** AccountSubscribeReqMsg RequestId */
        RequestId?: (number|Long|null);

        /** AccountSubscribeReqMsg Accounts */
        Accounts?: ((number|Long)[]|null);
    }

    /** Represents an AccountSubscribeReqMsg. */
    class AccountSubscribeReqMsg implements IAccountSubscribeReqMsg {

        /**
         * Constructs a new AccountSubscribeReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountSubscribeReqMsg);

        /** AccountSubscribeReqMsg RequestId. */
        public RequestId: (number|Long);

        /** AccountSubscribeReqMsg Accounts. */
        public Accounts: (number|Long)[];

        /**
         * Creates a new AccountSubscribeReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountSubscribeReqMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountSubscribeReqMsg): PropTradingProtocol.AccountSubscribeReqMsg;

        /**
         * Encodes the specified AccountSubscribeReqMsg message. Does not implicitly {@link PropTradingProtocol.AccountSubscribeReqMsg.verify|verify} messages.
         * @param message AccountSubscribeReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountSubscribeReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountSubscribeReqMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountSubscribeReqMsg.verify|verify} messages.
         * @param message AccountSubscribeReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountSubscribeReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountSubscribeReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountSubscribeReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountSubscribeReqMsg;

        /**
         * Decodes an AccountSubscribeReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountSubscribeReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountSubscribeReqMsg;

        /**
         * Verifies an AccountSubscribeReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountSubscribeReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountSubscribeReqMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountSubscribeReqMsg;

        /**
         * Creates a plain object from an AccountSubscribeReqMsg message. Also converts values to other types if specified.
         * @param message AccountSubscribeReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountSubscribeReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountSubscribeReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountSubscribeReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountSubscribeRespMsg. */
    interface IAccountSubscribeRespMsg {

        /** AccountSubscribeRespMsg RequestId */
        RequestId?: (number|Long|null);

        /** AccountSubscribeRespMsg Success */
        Success?: (boolean|null);

        /** AccountSubscribeRespMsg Reason */
        Reason?: (string|null);
    }

    /** Represents an AccountSubscribeRespMsg. */
    class AccountSubscribeRespMsg implements IAccountSubscribeRespMsg {

        /**
         * Constructs a new AccountSubscribeRespMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountSubscribeRespMsg);

        /** AccountSubscribeRespMsg RequestId. */
        public RequestId: (number|Long);

        /** AccountSubscribeRespMsg Success. */
        public Success: boolean;

        /** AccountSubscribeRespMsg Reason. */
        public Reason: string;

        /**
         * Creates a new AccountSubscribeRespMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountSubscribeRespMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountSubscribeRespMsg): PropTradingProtocol.AccountSubscribeRespMsg;

        /**
         * Encodes the specified AccountSubscribeRespMsg message. Does not implicitly {@link PropTradingProtocol.AccountSubscribeRespMsg.verify|verify} messages.
         * @param message AccountSubscribeRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountSubscribeRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountSubscribeRespMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountSubscribeRespMsg.verify|verify} messages.
         * @param message AccountSubscribeRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountSubscribeRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountSubscribeRespMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountSubscribeRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountSubscribeRespMsg;

        /**
         * Decodes an AccountSubscribeRespMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountSubscribeRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountSubscribeRespMsg;

        /**
         * Verifies an AccountSubscribeRespMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountSubscribeRespMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountSubscribeRespMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountSubscribeRespMsg;

        /**
         * Creates a plain object from an AccountSubscribeRespMsg message. Also converts values to other types if specified.
         * @param message AccountSubscribeRespMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountSubscribeRespMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountSubscribeRespMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountSubscribeRespMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OrderMsg. */
    interface IOrderMsg {

        /** OrderMsg OrderInsert */
        OrderInsert?: (PropTradingProtocol.IOrderInsertMsg|null);

        /** OrderMsg OrderRemove */
        OrderRemove?: (PropTradingProtocol.IOrderRemoveMsg|null);

        /** OrderMsg OrderModify */
        OrderModify?: (PropTradingProtocol.IOrderModifyMsg|null);

        /** OrderMsg BracketStrategyInsert */
        BracketStrategyInsert?: (PropTradingProtocol.IBracketStrageyInsertMsg|null);

        /** OrderMsg BracketModify */
        BracketModify?: (PropTradingProtocol.IBracketModifyMsg|null);

        /** OrderMsg OcoGroupCreate */
        OcoGroupCreate?: (PropTradingProtocol.IOcoGroupCreateMsg|null);

        /** OrderMsg OcoGroupRemove */
        OcoGroupRemove?: (PropTradingProtocol.IOcoGroupRemoveMsg|null);

        /** OrderMsg PositionFlatMsg */
        PositionFlatMsg?: (PropTradingProtocol.IPositionFlatMsg|null);

        /** OrderMsg BracketInsert */
        BracketInsert?: (PropTradingProtocol.IBracketInsertMsg|null);

        /** OrderMsg BracketRemove */
        BracketRemove?: (PropTradingProtocol.IBracketRemoveMsg|null);
    }

    /** Represents an OrderMsg. */
    class OrderMsg implements IOrderMsg {

        /**
         * Constructs a new OrderMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IOrderMsg);

        /** OrderMsg OrderInsert. */
        public OrderInsert?: (PropTradingProtocol.IOrderInsertMsg|null);

        /** OrderMsg OrderRemove. */
        public OrderRemove?: (PropTradingProtocol.IOrderRemoveMsg|null);

        /** OrderMsg OrderModify. */
        public OrderModify?: (PropTradingProtocol.IOrderModifyMsg|null);

        /** OrderMsg BracketStrategyInsert. */
        public BracketStrategyInsert?: (PropTradingProtocol.IBracketStrageyInsertMsg|null);

        /** OrderMsg BracketModify. */
        public BracketModify?: (PropTradingProtocol.IBracketModifyMsg|null);

        /** OrderMsg OcoGroupCreate. */
        public OcoGroupCreate?: (PropTradingProtocol.IOcoGroupCreateMsg|null);

        /** OrderMsg OcoGroupRemove. */
        public OcoGroupRemove?: (PropTradingProtocol.IOcoGroupRemoveMsg|null);

        /** OrderMsg PositionFlatMsg. */
        public PositionFlatMsg?: (PropTradingProtocol.IPositionFlatMsg|null);

        /** OrderMsg BracketInsert. */
        public BracketInsert?: (PropTradingProtocol.IBracketInsertMsg|null);

        /** OrderMsg BracketRemove. */
        public BracketRemove?: (PropTradingProtocol.IBracketRemoveMsg|null);

        /**
         * Creates a new OrderMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrderMsg instance
         */
        public static create(properties?: PropTradingProtocol.IOrderMsg): PropTradingProtocol.OrderMsg;

        /**
         * Encodes the specified OrderMsg message. Does not implicitly {@link PropTradingProtocol.OrderMsg.verify|verify} messages.
         * @param message OrderMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IOrderMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrderMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.OrderMsg.verify|verify} messages.
         * @param message OrderMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IOrderMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrderMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrderMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.OrderMsg;

        /**
         * Decodes an OrderMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrderMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.OrderMsg;

        /**
         * Verifies an OrderMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrderMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrderMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.OrderMsg;

        /**
         * Creates a plain object from an OrderMsg message. Also converts values to other types if specified.
         * @param message OrderMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.OrderMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrderMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OrderMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** OrderTypeEnum enum. */
    enum OrderTypeEnum {
        Market = 0,
        Limit = 1,
        Stop = 2,
        StopLimit = 3
    }

    /** OrderExpireEnum enum. */
    enum OrderExpireEnum {
        Never = 1,
        TillDay = 2
    }

    /** RequestSourceEnum enum. */
    enum RequestSourceEnum {
        Unknown = 0,
        Manual = 1,
        Automatic = 2,
        Copy = 3
    }

    /** OrderQuantityModeEnum enum. */
    enum OrderQuantityModeEnum {
        Fixed = 0,
        All = 1,
        AccountCountervalue = 2
    }

    /** Properties of an OrderInsertMsg. */
    interface IOrderInsertMsg {

        /** OrderInsertMsg ContractId */
        ContractId?: (number|Long|null);

        /** OrderInsertMsg SeqClientId */
        SeqClientId?: (number|null);

        /** OrderInsertMsg Quantity */
        Quantity?: (number|null);

        /** OrderInsertMsg Price */
        Price?: (number|null);

        /** OrderInsertMsg OrderType */
        OrderType?: (PropTradingProtocol.OrderTypeEnum|null);

        /** OrderInsertMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** OrderInsertMsg LimitPrice */
        LimitPrice?: (number|null);

        /** OrderInsertMsg BracketStrategy */
        BracketStrategy?: (PropTradingProtocol.IBracketStrategyParam|null);

        /** OrderInsertMsg RefPositionId */
        RefPositionId?: (number|Long|null);

        /** OrderInsertMsg Source */
        Source?: (PropTradingProtocol.RequestSourceEnum|null);

        /** OrderInsertMsg QuantityMode */
        QuantityMode?: (PropTradingProtocol.OrderQuantityModeEnum|null);
    }

    /** Represents an OrderInsertMsg. */
    class OrderInsertMsg implements IOrderInsertMsg {

        /**
         * Constructs a new OrderInsertMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IOrderInsertMsg);

        /** OrderInsertMsg ContractId. */
        public ContractId: (number|Long);

        /** OrderInsertMsg SeqClientId. */
        public SeqClientId: number;

        /** OrderInsertMsg Quantity. */
        public Quantity: number;

        /** OrderInsertMsg Price. */
        public Price: number;

        /** OrderInsertMsg OrderType. */
        public OrderType: PropTradingProtocol.OrderTypeEnum;

        /** OrderInsertMsg AccNumber. */
        public AccNumber: (number|Long);

        /** OrderInsertMsg LimitPrice. */
        public LimitPrice: number;

        /** OrderInsertMsg BracketStrategy. */
        public BracketStrategy?: (PropTradingProtocol.IBracketStrategyParam|null);

        /** OrderInsertMsg RefPositionId. */
        public RefPositionId: (number|Long);

        /** OrderInsertMsg Source. */
        public Source: PropTradingProtocol.RequestSourceEnum;

        /** OrderInsertMsg QuantityMode. */
        public QuantityMode: PropTradingProtocol.OrderQuantityModeEnum;

        /**
         * Creates a new OrderInsertMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrderInsertMsg instance
         */
        public static create(properties?: PropTradingProtocol.IOrderInsertMsg): PropTradingProtocol.OrderInsertMsg;

        /**
         * Encodes the specified OrderInsertMsg message. Does not implicitly {@link PropTradingProtocol.OrderInsertMsg.verify|verify} messages.
         * @param message OrderInsertMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IOrderInsertMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrderInsertMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.OrderInsertMsg.verify|verify} messages.
         * @param message OrderInsertMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IOrderInsertMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrderInsertMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrderInsertMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.OrderInsertMsg;

        /**
         * Decodes an OrderInsertMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrderInsertMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.OrderInsertMsg;

        /**
         * Verifies an OrderInsertMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrderInsertMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrderInsertMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.OrderInsertMsg;

        /**
         * Creates a plain object from an OrderInsertMsg message. Also converts values to other types if specified.
         * @param message OrderInsertMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.OrderInsertMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrderInsertMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OrderInsertMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OrderModifyMsg. */
    interface IOrderModifyMsg {

        /** OrderModifyMsg ContractId */
        ContractId?: (number|Long|null);

        /** OrderModifyMsg OrgServerId */
        OrgServerId?: (number|Long|null);

        /** OrderModifyMsg NewSeqClientId */
        NewSeqClientId?: (number|null);

        /** OrderModifyMsg Quantity */
        Quantity?: (number|null);

        /** OrderModifyMsg Price */
        Price?: (number|null);

        /** OrderModifyMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** OrderModifyMsg LimitPrice */
        LimitPrice?: (number|null);

        /** OrderModifyMsg Source */
        Source?: (PropTradingProtocol.RequestSourceEnum|null);
    }

    /** Represents an OrderModifyMsg. */
    class OrderModifyMsg implements IOrderModifyMsg {

        /**
         * Constructs a new OrderModifyMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IOrderModifyMsg);

        /** OrderModifyMsg ContractId. */
        public ContractId: (number|Long);

        /** OrderModifyMsg OrgServerId. */
        public OrgServerId: (number|Long);

        /** OrderModifyMsg NewSeqClientId. */
        public NewSeqClientId: number;

        /** OrderModifyMsg Quantity. */
        public Quantity: number;

        /** OrderModifyMsg Price. */
        public Price: number;

        /** OrderModifyMsg AccNumber. */
        public AccNumber: (number|Long);

        /** OrderModifyMsg LimitPrice. */
        public LimitPrice: number;

        /** OrderModifyMsg Source. */
        public Source: PropTradingProtocol.RequestSourceEnum;

        /**
         * Creates a new OrderModifyMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrderModifyMsg instance
         */
        public static create(properties?: PropTradingProtocol.IOrderModifyMsg): PropTradingProtocol.OrderModifyMsg;

        /**
         * Encodes the specified OrderModifyMsg message. Does not implicitly {@link PropTradingProtocol.OrderModifyMsg.verify|verify} messages.
         * @param message OrderModifyMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IOrderModifyMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrderModifyMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.OrderModifyMsg.verify|verify} messages.
         * @param message OrderModifyMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IOrderModifyMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrderModifyMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrderModifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.OrderModifyMsg;

        /**
         * Decodes an OrderModifyMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrderModifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.OrderModifyMsg;

        /**
         * Verifies an OrderModifyMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrderModifyMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrderModifyMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.OrderModifyMsg;

        /**
         * Creates a plain object from an OrderModifyMsg message. Also converts values to other types if specified.
         * @param message OrderModifyMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.OrderModifyMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrderModifyMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OrderModifyMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OrderRemoveMsg. */
    interface IOrderRemoveMsg {

        /** OrderRemoveMsg OrgServerId */
        OrgServerId?: (number|Long|null);

        /** OrderRemoveMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** OrderRemoveMsg Source */
        Source?: (PropTradingProtocol.RequestSourceEnum|null);
    }

    /** Represents an OrderRemoveMsg. */
    class OrderRemoveMsg implements IOrderRemoveMsg {

        /**
         * Constructs a new OrderRemoveMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IOrderRemoveMsg);

        /** OrderRemoveMsg OrgServerId. */
        public OrgServerId: (number|Long);

        /** OrderRemoveMsg AccNumber. */
        public AccNumber: (number|Long);

        /** OrderRemoveMsg Source. */
        public Source: PropTradingProtocol.RequestSourceEnum;

        /**
         * Creates a new OrderRemoveMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrderRemoveMsg instance
         */
        public static create(properties?: PropTradingProtocol.IOrderRemoveMsg): PropTradingProtocol.OrderRemoveMsg;

        /**
         * Encodes the specified OrderRemoveMsg message. Does not implicitly {@link PropTradingProtocol.OrderRemoveMsg.verify|verify} messages.
         * @param message OrderRemoveMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IOrderRemoveMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrderRemoveMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.OrderRemoveMsg.verify|verify} messages.
         * @param message OrderRemoveMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IOrderRemoveMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrderRemoveMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrderRemoveMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.OrderRemoveMsg;

        /**
         * Decodes an OrderRemoveMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrderRemoveMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.OrderRemoveMsg;

        /**
         * Verifies an OrderRemoveMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrderRemoveMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrderRemoveMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.OrderRemoveMsg;

        /**
         * Creates a plain object from an OrderRemoveMsg message. Also converts values to other types if specified.
         * @param message OrderRemoveMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.OrderRemoveMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrderRemoveMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OrderRemoveMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BracketStrategyParam. */
    interface IBracketStrategyParam {

        /** BracketStrategyParam Type */
        Type?: (PropTradingProtocol.BracketStrategyParam.TypeEnum|null);

        /** BracketStrategyParam Stops */
        Stops?: (PropTradingProtocol.IBracketParam[]|null);

        /** BracketStrategyParam Targets */
        Targets?: (PropTradingProtocol.IBracketParam[]|null);

        /** BracketStrategyParam TrailingMode */
        TrailingMode?: (PropTradingProtocol.BracketStrategyParam.StopTrailingModeEnum|null);

        /** BracketStrategyParam TrailingTicks */
        TrailingTicks?: (number|null);

        /** BracketStrategyParam TrailingMinOffsetTicks */
        TrailingMinOffsetTicks?: (number|null);
    }

    /** Represents a BracketStrategyParam. */
    class BracketStrategyParam implements IBracketStrategyParam {

        /**
         * Constructs a new BracketStrategyParam.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IBracketStrategyParam);

        /** BracketStrategyParam Type. */
        public Type: PropTradingProtocol.BracketStrategyParam.TypeEnum;

        /** BracketStrategyParam Stops. */
        public Stops: PropTradingProtocol.IBracketParam[];

        /** BracketStrategyParam Targets. */
        public Targets: PropTradingProtocol.IBracketParam[];

        /** BracketStrategyParam TrailingMode. */
        public TrailingMode: PropTradingProtocol.BracketStrategyParam.StopTrailingModeEnum;

        /** BracketStrategyParam TrailingTicks. */
        public TrailingTicks: number;

        /** BracketStrategyParam TrailingMinOffsetTicks. */
        public TrailingMinOffsetTicks: number;

        /**
         * Creates a new BracketStrategyParam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BracketStrategyParam instance
         */
        public static create(properties?: PropTradingProtocol.IBracketStrategyParam): PropTradingProtocol.BracketStrategyParam;

        /**
         * Encodes the specified BracketStrategyParam message. Does not implicitly {@link PropTradingProtocol.BracketStrategyParam.verify|verify} messages.
         * @param message BracketStrategyParam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IBracketStrategyParam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BracketStrategyParam message, length delimited. Does not implicitly {@link PropTradingProtocol.BracketStrategyParam.verify|verify} messages.
         * @param message BracketStrategyParam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IBracketStrategyParam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BracketStrategyParam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BracketStrategyParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.BracketStrategyParam;

        /**
         * Decodes a BracketStrategyParam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BracketStrategyParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.BracketStrategyParam;

        /**
         * Verifies a BracketStrategyParam message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BracketStrategyParam message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BracketStrategyParam
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.BracketStrategyParam;

        /**
         * Creates a plain object from a BracketStrategyParam message. Also converts values to other types if specified.
         * @param message BracketStrategyParam
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.BracketStrategyParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BracketStrategyParam to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BracketStrategyParam
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BracketStrategyParam {

        /** TypeEnum enum. */
        enum TypeEnum {
            STOP_AND_TARGET = 0,
            STOP_AND_TARGET_STATIC = 1,
            STOP = 2,
            STOP_STATIC = 3,
            TARGET = 4,
            TARGET_STATIC = 5
        }

        /** StopTrailingModeEnum enum. */
        enum StopTrailingModeEnum {
            None = 0,
            Breakeven = 1,
            Trailing = 2
        }
    }

    /** Properties of a BracketParam. */
    interface IBracketParam {

        /** BracketParam Quantity */
        Quantity?: (number|null);

        /** BracketParam PriceMode */
        PriceMode?: (PropTradingProtocol.BracketParam.PriceModeEnum|null);

        /** BracketParam TicksOffset */
        TicksOffset?: (number|null);

        /** BracketParam Price */
        Price?: (number|null);
    }

    /** Represents a BracketParam. */
    class BracketParam implements IBracketParam {

        /**
         * Constructs a new BracketParam.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IBracketParam);

        /** BracketParam Quantity. */
        public Quantity: number;

        /** BracketParam PriceMode. */
        public PriceMode: PropTradingProtocol.BracketParam.PriceModeEnum;

        /** BracketParam TicksOffset. */
        public TicksOffset: number;

        /** BracketParam Price. */
        public Price: number;

        /**
         * Creates a new BracketParam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BracketParam instance
         */
        public static create(properties?: PropTradingProtocol.IBracketParam): PropTradingProtocol.BracketParam;

        /**
         * Encodes the specified BracketParam message. Does not implicitly {@link PropTradingProtocol.BracketParam.verify|verify} messages.
         * @param message BracketParam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IBracketParam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BracketParam message, length delimited. Does not implicitly {@link PropTradingProtocol.BracketParam.verify|verify} messages.
         * @param message BracketParam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IBracketParam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BracketParam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BracketParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.BracketParam;

        /**
         * Decodes a BracketParam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BracketParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.BracketParam;

        /**
         * Verifies a BracketParam message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BracketParam message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BracketParam
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.BracketParam;

        /**
         * Creates a plain object from a BracketParam message. Also converts values to other types if specified.
         * @param message BracketParam
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.BracketParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BracketParam to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BracketParam
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BracketParam {

        /** PriceModeEnum enum. */
        enum PriceModeEnum {
            Ticks = 0,
            Price = 1,
            PriceOffset = 2
        }
    }

    /** Properties of a BracketStrageyInsertMsg. */
    interface IBracketStrageyInsertMsg {

        /** BracketStrageyInsertMsg RequestId */
        RequestId?: (number|Long|null);

        /** BracketStrageyInsertMsg ParentOrderId */
        ParentOrderId?: (number|Long|null);

        /** BracketStrageyInsertMsg BracketStrategy */
        BracketStrategy?: (PropTradingProtocol.IBracketStrategyParam|null);

        /** BracketStrageyInsertMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** BracketStrageyInsertMsg Source */
        Source?: (PropTradingProtocol.RequestSourceEnum|null);

        /** BracketStrageyInsertMsg IsReplace */
        IsReplace?: (boolean|null);
    }

    /** Represents a BracketStrageyInsertMsg. */
    class BracketStrageyInsertMsg implements IBracketStrageyInsertMsg {

        /**
         * Constructs a new BracketStrageyInsertMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IBracketStrageyInsertMsg);

        /** BracketStrageyInsertMsg RequestId. */
        public RequestId: (number|Long);

        /** BracketStrageyInsertMsg ParentOrderId. */
        public ParentOrderId: (number|Long);

        /** BracketStrageyInsertMsg BracketStrategy. */
        public BracketStrategy?: (PropTradingProtocol.IBracketStrategyParam|null);

        /** BracketStrageyInsertMsg AccNumber. */
        public AccNumber: (number|Long);

        /** BracketStrageyInsertMsg Source. */
        public Source: PropTradingProtocol.RequestSourceEnum;

        /** BracketStrageyInsertMsg IsReplace. */
        public IsReplace: boolean;

        /**
         * Creates a new BracketStrageyInsertMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BracketStrageyInsertMsg instance
         */
        public static create(properties?: PropTradingProtocol.IBracketStrageyInsertMsg): PropTradingProtocol.BracketStrageyInsertMsg;

        /**
         * Encodes the specified BracketStrageyInsertMsg message. Does not implicitly {@link PropTradingProtocol.BracketStrageyInsertMsg.verify|verify} messages.
         * @param message BracketStrageyInsertMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IBracketStrageyInsertMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BracketStrageyInsertMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.BracketStrageyInsertMsg.verify|verify} messages.
         * @param message BracketStrageyInsertMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IBracketStrageyInsertMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BracketStrageyInsertMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BracketStrageyInsertMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.BracketStrageyInsertMsg;

        /**
         * Decodes a BracketStrageyInsertMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BracketStrageyInsertMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.BracketStrageyInsertMsg;

        /**
         * Verifies a BracketStrageyInsertMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BracketStrageyInsertMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BracketStrageyInsertMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.BracketStrageyInsertMsg;

        /**
         * Creates a plain object from a BracketStrageyInsertMsg message. Also converts values to other types if specified.
         * @param message BracketStrageyInsertMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.BracketStrageyInsertMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BracketStrageyInsertMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BracketStrageyInsertMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BracketInsertMsg. */
    interface IBracketInsertMsg {

        /** BracketInsertMsg RequestId */
        RequestId?: (number|Long|null);

        /** BracketInsertMsg ParentOrderId */
        ParentOrderId?: (number|Long|null);

        /** BracketInsertMsg IsTarget */
        IsTarget?: (boolean|null);

        /** BracketInsertMsg BracketParam */
        BracketParam?: (PropTradingProtocol.IBracketParam|null);

        /** BracketInsertMsg ClientId */
        ClientId?: (number|null);

        /** BracketInsertMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** BracketInsertMsg Source */
        Source?: (PropTradingProtocol.RequestSourceEnum|null);
    }

    /** Represents a BracketInsertMsg. */
    class BracketInsertMsg implements IBracketInsertMsg {

        /**
         * Constructs a new BracketInsertMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IBracketInsertMsg);

        /** BracketInsertMsg RequestId. */
        public RequestId: (number|Long);

        /** BracketInsertMsg ParentOrderId. */
        public ParentOrderId: (number|Long);

        /** BracketInsertMsg IsTarget. */
        public IsTarget: boolean;

        /** BracketInsertMsg BracketParam. */
        public BracketParam?: (PropTradingProtocol.IBracketParam|null);

        /** BracketInsertMsg ClientId. */
        public ClientId: number;

        /** BracketInsertMsg AccNumber. */
        public AccNumber: (number|Long);

        /** BracketInsertMsg Source. */
        public Source: PropTradingProtocol.RequestSourceEnum;

        /**
         * Creates a new BracketInsertMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BracketInsertMsg instance
         */
        public static create(properties?: PropTradingProtocol.IBracketInsertMsg): PropTradingProtocol.BracketInsertMsg;

        /**
         * Encodes the specified BracketInsertMsg message. Does not implicitly {@link PropTradingProtocol.BracketInsertMsg.verify|verify} messages.
         * @param message BracketInsertMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IBracketInsertMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BracketInsertMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.BracketInsertMsg.verify|verify} messages.
         * @param message BracketInsertMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IBracketInsertMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BracketInsertMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BracketInsertMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.BracketInsertMsg;

        /**
         * Decodes a BracketInsertMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BracketInsertMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.BracketInsertMsg;

        /**
         * Verifies a BracketInsertMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BracketInsertMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BracketInsertMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.BracketInsertMsg;

        /**
         * Creates a plain object from a BracketInsertMsg message. Also converts values to other types if specified.
         * @param message BracketInsertMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.BracketInsertMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BracketInsertMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BracketInsertMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BracketModifyMsg. */
    interface IBracketModifyMsg {

        /** BracketModifyMsg ParentOrderId */
        ParentOrderId?: (number|Long|null);

        /** BracketModifyMsg BracketId */
        BracketId?: (number|Long|null);

        /** BracketModifyMsg BracketParam */
        BracketParam?: (PropTradingProtocol.IBracketParam|null);

        /** BracketModifyMsg ClientId */
        ClientId?: (number|null);

        /** BracketModifyMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** BracketModifyMsg Source */
        Source?: (PropTradingProtocol.RequestSourceEnum|null);
    }

    /** Represents a BracketModifyMsg. */
    class BracketModifyMsg implements IBracketModifyMsg {

        /**
         * Constructs a new BracketModifyMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IBracketModifyMsg);

        /** BracketModifyMsg ParentOrderId. */
        public ParentOrderId: (number|Long);

        /** BracketModifyMsg BracketId. */
        public BracketId: (number|Long);

        /** BracketModifyMsg BracketParam. */
        public BracketParam?: (PropTradingProtocol.IBracketParam|null);

        /** BracketModifyMsg ClientId. */
        public ClientId: number;

        /** BracketModifyMsg AccNumber. */
        public AccNumber: (number|Long);

        /** BracketModifyMsg Source. */
        public Source: PropTradingProtocol.RequestSourceEnum;

        /**
         * Creates a new BracketModifyMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BracketModifyMsg instance
         */
        public static create(properties?: PropTradingProtocol.IBracketModifyMsg): PropTradingProtocol.BracketModifyMsg;

        /**
         * Encodes the specified BracketModifyMsg message. Does not implicitly {@link PropTradingProtocol.BracketModifyMsg.verify|verify} messages.
         * @param message BracketModifyMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IBracketModifyMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BracketModifyMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.BracketModifyMsg.verify|verify} messages.
         * @param message BracketModifyMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IBracketModifyMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BracketModifyMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BracketModifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.BracketModifyMsg;

        /**
         * Decodes a BracketModifyMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BracketModifyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.BracketModifyMsg;

        /**
         * Verifies a BracketModifyMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BracketModifyMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BracketModifyMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.BracketModifyMsg;

        /**
         * Creates a plain object from a BracketModifyMsg message. Also converts values to other types if specified.
         * @param message BracketModifyMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.BracketModifyMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BracketModifyMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BracketModifyMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BracketRemoveMsg. */
    interface IBracketRemoveMsg {

        /** BracketRemoveMsg ParentOrderId */
        ParentOrderId?: (number|Long|null);

        /** BracketRemoveMsg BracketId */
        BracketId?: (number|Long|null);

        /** BracketRemoveMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** BracketRemoveMsg Source */
        Source?: (PropTradingProtocol.RequestSourceEnum|null);
    }

    /** Represents a BracketRemoveMsg. */
    class BracketRemoveMsg implements IBracketRemoveMsg {

        /**
         * Constructs a new BracketRemoveMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IBracketRemoveMsg);

        /** BracketRemoveMsg ParentOrderId. */
        public ParentOrderId: (number|Long);

        /** BracketRemoveMsg BracketId. */
        public BracketId: (number|Long);

        /** BracketRemoveMsg AccNumber. */
        public AccNumber: (number|Long);

        /** BracketRemoveMsg Source. */
        public Source: PropTradingProtocol.RequestSourceEnum;

        /**
         * Creates a new BracketRemoveMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BracketRemoveMsg instance
         */
        public static create(properties?: PropTradingProtocol.IBracketRemoveMsg): PropTradingProtocol.BracketRemoveMsg;

        /**
         * Encodes the specified BracketRemoveMsg message. Does not implicitly {@link PropTradingProtocol.BracketRemoveMsg.verify|verify} messages.
         * @param message BracketRemoveMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IBracketRemoveMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BracketRemoveMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.BracketRemoveMsg.verify|verify} messages.
         * @param message BracketRemoveMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IBracketRemoveMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BracketRemoveMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BracketRemoveMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.BracketRemoveMsg;

        /**
         * Decodes a BracketRemoveMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BracketRemoveMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.BracketRemoveMsg;

        /**
         * Verifies a BracketRemoveMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BracketRemoveMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BracketRemoveMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.BracketRemoveMsg;

        /**
         * Creates a plain object from a BracketRemoveMsg message. Also converts values to other types if specified.
         * @param message BracketRemoveMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.BracketRemoveMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BracketRemoveMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BracketRemoveMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OcoGroupCreateMsg. */
    interface IOcoGroupCreateMsg {

        /** OcoGroupCreateMsg RequestId */
        RequestId?: (number|Long|null);

        /** OcoGroupCreateMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** OcoGroupCreateMsg Type */
        Type?: (PropTradingProtocol.OcoGroupCreateMsg.GroupTypeEnum|null);

        /** OcoGroupCreateMsg OcoLinkedOrderIds */
        OcoLinkedOrderIds?: ((number|Long)[]|null);

        /** OcoGroupCreateMsg OrderPlace */
        OrderPlace?: (PropTradingProtocol.OcoGroupCreateMsg.OcoOrdersPlaceEnum|null);

        /** OcoGroupCreateMsg OrderInsert */
        OrderInsert?: (PropTradingProtocol.IOrderInsertMsg[]|null);

        /** OcoGroupCreateMsg Source */
        Source?: (PropTradingProtocol.RequestSourceEnum|null);
    }

    /** Represents an OcoGroupCreateMsg. */
    class OcoGroupCreateMsg implements IOcoGroupCreateMsg {

        /**
         * Constructs a new OcoGroupCreateMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IOcoGroupCreateMsg);

        /** OcoGroupCreateMsg RequestId. */
        public RequestId: (number|Long);

        /** OcoGroupCreateMsg AccNumber. */
        public AccNumber: (number|Long);

        /** OcoGroupCreateMsg Type. */
        public Type: PropTradingProtocol.OcoGroupCreateMsg.GroupTypeEnum;

        /** OcoGroupCreateMsg OcoLinkedOrderIds. */
        public OcoLinkedOrderIds: (number|Long)[];

        /** OcoGroupCreateMsg OrderPlace. */
        public OrderPlace: PropTradingProtocol.OcoGroupCreateMsg.OcoOrdersPlaceEnum;

        /** OcoGroupCreateMsg OrderInsert. */
        public OrderInsert: PropTradingProtocol.IOrderInsertMsg[];

        /** OcoGroupCreateMsg Source. */
        public Source: PropTradingProtocol.RequestSourceEnum;

        /**
         * Creates a new OcoGroupCreateMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OcoGroupCreateMsg instance
         */
        public static create(properties?: PropTradingProtocol.IOcoGroupCreateMsg): PropTradingProtocol.OcoGroupCreateMsg;

        /**
         * Encodes the specified OcoGroupCreateMsg message. Does not implicitly {@link PropTradingProtocol.OcoGroupCreateMsg.verify|verify} messages.
         * @param message OcoGroupCreateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IOcoGroupCreateMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OcoGroupCreateMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.OcoGroupCreateMsg.verify|verify} messages.
         * @param message OcoGroupCreateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IOcoGroupCreateMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OcoGroupCreateMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OcoGroupCreateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.OcoGroupCreateMsg;

        /**
         * Decodes an OcoGroupCreateMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OcoGroupCreateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.OcoGroupCreateMsg;

        /**
         * Verifies an OcoGroupCreateMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OcoGroupCreateMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OcoGroupCreateMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.OcoGroupCreateMsg;

        /**
         * Creates a plain object from an OcoGroupCreateMsg message. Also converts values to other types if specified.
         * @param message OcoGroupCreateMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.OcoGroupCreateMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OcoGroupCreateMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OcoGroupCreateMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace OcoGroupCreateMsg {

        /** GroupTypeEnum enum. */
        enum GroupTypeEnum {
            STOPS_LIMITS = 0,
            OPPOSITE_QTY = 1
        }

        /** OcoOrdersPlaceEnum enum. */
        enum OcoOrdersPlaceEnum {
            EXISTING = 0,
            INSERT = 1
        }
    }

    /** Properties of an OcoGroupRemoveMsg. */
    interface IOcoGroupRemoveMsg {

        /** OcoGroupRemoveMsg RequestId */
        RequestId?: (number|Long|null);

        /** OcoGroupRemoveMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** OcoGroupRemoveMsg OcoGroupId */
        OcoGroupId?: (number|Long|null);

        /** OcoGroupRemoveMsg Source */
        Source?: (PropTradingProtocol.RequestSourceEnum|null);
    }

    /** Represents an OcoGroupRemoveMsg. */
    class OcoGroupRemoveMsg implements IOcoGroupRemoveMsg {

        /**
         * Constructs a new OcoGroupRemoveMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IOcoGroupRemoveMsg);

        /** OcoGroupRemoveMsg RequestId. */
        public RequestId: (number|Long);

        /** OcoGroupRemoveMsg AccNumber. */
        public AccNumber: (number|Long);

        /** OcoGroupRemoveMsg OcoGroupId. */
        public OcoGroupId: (number|Long);

        /** OcoGroupRemoveMsg Source. */
        public Source: PropTradingProtocol.RequestSourceEnum;

        /**
         * Creates a new OcoGroupRemoveMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OcoGroupRemoveMsg instance
         */
        public static create(properties?: PropTradingProtocol.IOcoGroupRemoveMsg): PropTradingProtocol.OcoGroupRemoveMsg;

        /**
         * Encodes the specified OcoGroupRemoveMsg message. Does not implicitly {@link PropTradingProtocol.OcoGroupRemoveMsg.verify|verify} messages.
         * @param message OcoGroupRemoveMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IOcoGroupRemoveMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OcoGroupRemoveMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.OcoGroupRemoveMsg.verify|verify} messages.
         * @param message OcoGroupRemoveMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IOcoGroupRemoveMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OcoGroupRemoveMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OcoGroupRemoveMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.OcoGroupRemoveMsg;

        /**
         * Decodes an OcoGroupRemoveMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OcoGroupRemoveMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.OcoGroupRemoveMsg;

        /**
         * Verifies an OcoGroupRemoveMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OcoGroupRemoveMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OcoGroupRemoveMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.OcoGroupRemoveMsg;

        /**
         * Creates a plain object from an OcoGroupRemoveMsg message. Also converts values to other types if specified.
         * @param message OcoGroupRemoveMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.OcoGroupRemoveMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OcoGroupRemoveMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OcoGroupRemoveMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OcoGroupReportMsg. */
    interface IOcoGroupReportMsg {

        /** OcoGroupReportMsg RequestId */
        RequestId?: (number|Long|null);

        /** OcoGroupReportMsg Success */
        Success?: (boolean|null);

        /** OcoGroupReportMsg OcoGroupId */
        OcoGroupId?: (number|Long|null);

        /** OcoGroupReportMsg Reason */
        Reason?: (string|null);
    }

    /** Represents an OcoGroupReportMsg. */
    class OcoGroupReportMsg implements IOcoGroupReportMsg {

        /**
         * Constructs a new OcoGroupReportMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IOcoGroupReportMsg);

        /** OcoGroupReportMsg RequestId. */
        public RequestId: (number|Long);

        /** OcoGroupReportMsg Success. */
        public Success: boolean;

        /** OcoGroupReportMsg OcoGroupId. */
        public OcoGroupId: (number|Long);

        /** OcoGroupReportMsg Reason. */
        public Reason: string;

        /**
         * Creates a new OcoGroupReportMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OcoGroupReportMsg instance
         */
        public static create(properties?: PropTradingProtocol.IOcoGroupReportMsg): PropTradingProtocol.OcoGroupReportMsg;

        /**
         * Encodes the specified OcoGroupReportMsg message. Does not implicitly {@link PropTradingProtocol.OcoGroupReportMsg.verify|verify} messages.
         * @param message OcoGroupReportMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IOcoGroupReportMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OcoGroupReportMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.OcoGroupReportMsg.verify|verify} messages.
         * @param message OcoGroupReportMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IOcoGroupReportMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OcoGroupReportMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OcoGroupReportMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.OcoGroupReportMsg;

        /**
         * Decodes an OcoGroupReportMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OcoGroupReportMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.OcoGroupReportMsg;

        /**
         * Verifies an OcoGroupReportMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OcoGroupReportMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OcoGroupReportMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.OcoGroupReportMsg;

        /**
         * Creates a plain object from an OcoGroupReportMsg message. Also converts values to other types if specified.
         * @param message OcoGroupReportMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.OcoGroupReportMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OcoGroupReportMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OcoGroupReportMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PositionFlatMsg. */
    interface IPositionFlatMsg {

        /** PositionFlatMsg PositionId */
        PositionId?: (number|Long|null);

        /** PositionFlatMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** PositionFlatMsg Source */
        Source?: (PropTradingProtocol.RequestSourceEnum|null);
    }

    /** Represents a PositionFlatMsg. */
    class PositionFlatMsg implements IPositionFlatMsg {

        /**
         * Constructs a new PositionFlatMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IPositionFlatMsg);

        /** PositionFlatMsg PositionId. */
        public PositionId: (number|Long);

        /** PositionFlatMsg AccNumber. */
        public AccNumber: (number|Long);

        /** PositionFlatMsg Source. */
        public Source: PropTradingProtocol.RequestSourceEnum;

        /**
         * Creates a new PositionFlatMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PositionFlatMsg instance
         */
        public static create(properties?: PropTradingProtocol.IPositionFlatMsg): PropTradingProtocol.PositionFlatMsg;

        /**
         * Encodes the specified PositionFlatMsg message. Does not implicitly {@link PropTradingProtocol.PositionFlatMsg.verify|verify} messages.
         * @param message PositionFlatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IPositionFlatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PositionFlatMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.PositionFlatMsg.verify|verify} messages.
         * @param message PositionFlatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IPositionFlatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PositionFlatMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PositionFlatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.PositionFlatMsg;

        /**
         * Decodes a PositionFlatMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PositionFlatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.PositionFlatMsg;

        /**
         * Verifies a PositionFlatMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PositionFlatMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PositionFlatMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.PositionFlatMsg;

        /**
         * Creates a plain object from a PositionFlatMsg message. Also converts values to other types if specified.
         * @param message PositionFlatMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.PositionFlatMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PositionFlatMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PositionFlatMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OrderInfoMsg. */
    interface IOrderInfoMsg {

        /** OrderInfoMsg ContractId */
        ContractId?: (number|Long|null);

        /** OrderInfoMsg OrgServerId */
        OrgServerId?: (number|Long|null);

        /** OrderInfoMsg OrgClientId */
        OrgClientId?: (number|null);

        /** OrderInfoMsg SeqServerId */
        SeqServerId?: (number|Long|null);

        /** OrderInfoMsg SeqClientId */
        SeqClientId?: (number|null);

        /** OrderInfoMsg OrderPrice */
        OrderPrice?: (number|null);

        /** OrderInfoMsg OrderLimitPrice */
        OrderLimitPrice?: (number|null);

        /** OrderInfoMsg PendingQty */
        PendingQty?: (number|null);

        /** OrderInfoMsg FilledQty */
        FilledQty?: (number|null);

        /** OrderInfoMsg OrderType */
        OrderType?: (PropTradingProtocol.OrderTypeEnum|null);

        /** OrderInfoMsg OrderState */
        OrderState?: (PropTradingProtocol.OrderInfoMsg.OrderStateEnum|null);

        /** OrderInfoMsg AvgPrice */
        AvgPrice?: (number|null);

        /** OrderInfoMsg SnapType */
        SnapType?: (PropTradingProtocol.OrderInfoMsg.SnapTypeEnum|null);

        /** OrderInfoMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** OrderInfoMsg Reason */
        Reason?: (string|null);

        /** OrderInfoMsg FeedSymbol */
        FeedSymbol?: (string|null);

        /** OrderInfoMsg Isin */
        Isin?: (string|null);

        /** OrderInfoMsg OcoLinkedGroupId */
        OcoLinkedGroupId?: (number|Long|null);

        /** OrderInfoMsg OcoLinkedOrderIds */
        OcoLinkedOrderIds?: ((number|Long)[]|null);

        /** OrderInfoMsg OcoParentOrderId */
        OcoParentOrderId?: (number|Long|null);

        /** OrderInfoMsg PositionLinkId */
        PositionLinkId?: (number|Long|null);

        /** OrderInfoMsg IsGeneratedFromBracket */
        IsGeneratedFromBracket?: (boolean|null);

        /** OrderInfoMsg QuantityMode */
        QuantityMode?: (PropTradingProtocol.OrderQuantityModeEnum|null);

        /** OrderInfoMsg InsertUtc */
        InsertUtc?: (number|Long|null);

        /** OrderInfoMsg ExeuctionUtc */
        ExeuctionUtc?: (number|Long|null);

        /** OrderInfoMsg Ip */
        Ip?: (string|null);

        /** OrderInfoMsg Source */
        Source?: (string|null);

        /** RESERVED FIELDS************************* */
        OrgClientSessionId?: (number|Long|null);

        /** OrderInfoMsg SeqClientSessionId */
        SeqClientSessionId?: (number|Long|null);

        /** OrderInfoMsg IsValidationError */
        IsValidationError?: (boolean|null);
    }

    /** Represents an OrderInfoMsg. */
    class OrderInfoMsg implements IOrderInfoMsg {

        /**
         * Constructs a new OrderInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IOrderInfoMsg);

        /** OrderInfoMsg ContractId. */
        public ContractId: (number|Long);

        /** OrderInfoMsg OrgServerId. */
        public OrgServerId: (number|Long);

        /** OrderInfoMsg OrgClientId. */
        public OrgClientId: number;

        /** OrderInfoMsg SeqServerId. */
        public SeqServerId: (number|Long);

        /** OrderInfoMsg SeqClientId. */
        public SeqClientId: number;

        /** OrderInfoMsg OrderPrice. */
        public OrderPrice: number;

        /** OrderInfoMsg OrderLimitPrice. */
        public OrderLimitPrice: number;

        /** OrderInfoMsg PendingQty. */
        public PendingQty: number;

        /** OrderInfoMsg FilledQty. */
        public FilledQty: number;

        /** OrderInfoMsg OrderType. */
        public OrderType: PropTradingProtocol.OrderTypeEnum;

        /** OrderInfoMsg OrderState. */
        public OrderState: PropTradingProtocol.OrderInfoMsg.OrderStateEnum;

        /** OrderInfoMsg AvgPrice. */
        public AvgPrice: number;

        /** OrderInfoMsg SnapType. */
        public SnapType: PropTradingProtocol.OrderInfoMsg.SnapTypeEnum;

        /** OrderInfoMsg AccNumber. */
        public AccNumber: (number|Long);

        /** OrderInfoMsg Reason. */
        public Reason: string;

        /** OrderInfoMsg FeedSymbol. */
        public FeedSymbol: string;

        /** OrderInfoMsg Isin. */
        public Isin: string;

        /** OrderInfoMsg OcoLinkedGroupId. */
        public OcoLinkedGroupId: (number|Long);

        /** OrderInfoMsg OcoLinkedOrderIds. */
        public OcoLinkedOrderIds: (number|Long)[];

        /** OrderInfoMsg OcoParentOrderId. */
        public OcoParentOrderId: (number|Long);

        /** OrderInfoMsg PositionLinkId. */
        public PositionLinkId: (number|Long);

        /** OrderInfoMsg IsGeneratedFromBracket. */
        public IsGeneratedFromBracket: boolean;

        /** OrderInfoMsg QuantityMode. */
        public QuantityMode: PropTradingProtocol.OrderQuantityModeEnum;

        /** OrderInfoMsg InsertUtc. */
        public InsertUtc: (number|Long);

        /** OrderInfoMsg ExeuctionUtc. */
        public ExeuctionUtc: (number|Long);

        /** OrderInfoMsg Ip. */
        public Ip: string;

        /** OrderInfoMsg Source. */
        public Source: string;

        /** RESERVED FIELDS************************* */
        public OrgClientSessionId: (number|Long);

        /** OrderInfoMsg SeqClientSessionId. */
        public SeqClientSessionId: (number|Long);

        /** OrderInfoMsg IsValidationError. */
        public IsValidationError: boolean;

        /**
         * Creates a new OrderInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrderInfoMsg instance
         */
        public static create(properties?: PropTradingProtocol.IOrderInfoMsg): PropTradingProtocol.OrderInfoMsg;

        /**
         * Encodes the specified OrderInfoMsg message. Does not implicitly {@link PropTradingProtocol.OrderInfoMsg.verify|verify} messages.
         * @param message OrderInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IOrderInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrderInfoMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.OrderInfoMsg.verify|verify} messages.
         * @param message OrderInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IOrderInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrderInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrderInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.OrderInfoMsg;

        /**
         * Decodes an OrderInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrderInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.OrderInfoMsg;

        /**
         * Verifies an OrderInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrderInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrderInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.OrderInfoMsg;

        /**
         * Creates a plain object from an OrderInfoMsg message. Also converts values to other types if specified.
         * @param message OrderInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.OrderInfoMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrderInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OrderInfoMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace OrderInfoMsg {

        /** OrderStateEnum enum. */
        enum OrderStateEnum {
            Submitted = 0,
            Canceled = 1,
            Error = 2,
            ErrorModify = 3
        }

        /** SnapTypeEnum enum. */
        enum SnapTypeEnum {
            Historical = 1,
            RealTime = 2,
            HistPos = 3
        }
    }

    /** Properties of a BracketInfoMsg. */
    interface IBracketInfoMsg {

        /** BracketInfoMsg ContractId */
        ContractId?: (number|Long|null);

        /** BracketInfoMsg ParentOrderId */
        ParentOrderId?: (number|Long|null);

        /** BracketInfoMsg OcoGroupId */
        OcoGroupId?: (number|Long|null);

        /** BracketInfoMsg BracketId */
        BracketId?: (number|Long|null);

        /** BracketInfoMsg SeqClientId */
        SeqClientId?: (number|null);

        /** BracketInfoMsg Price */
        Price?: (number|null);

        /** BracketInfoMsg Ticks */
        Ticks?: (number|null);

        /** BracketInfoMsg CalculatedPrice */
        CalculatedPrice?: (number|null);

        /** BracketInfoMsg TotalQty */
        TotalQty?: (number|null);

        /** BracketInfoMsg ReleasedQty */
        ReleasedQty?: (number|null);

        /** BracketInfoMsg IsTarget */
        IsTarget?: (boolean|null);

        /** BracketInfoMsg BracketState */
        BracketState?: (PropTradingProtocol.BracketInfoMsg.BracketStateEnum|null);

        /** BracketInfoMsg SnapType */
        SnapType?: (PropTradingProtocol.BracketInfoMsg.SnapTypeEnum|null);

        /** BracketInfoMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** BracketInfoMsg Reason */
        Reason?: (string|null);

        /** BracketInfoMsg FeedSymbol */
        FeedSymbol?: (string|null);

        /** BracketInfoMsg Isin */
        Isin?: (string|null);

        /** RESERVED FIELDS************************* */
        ClientSessionId?: (number|Long|null);

        /** BracketInfoMsg IsValidationError */
        IsValidationError?: (boolean|null);
    }

    /** Represents a BracketInfoMsg. */
    class BracketInfoMsg implements IBracketInfoMsg {

        /**
         * Constructs a new BracketInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IBracketInfoMsg);

        /** BracketInfoMsg ContractId. */
        public ContractId: (number|Long);

        /** BracketInfoMsg ParentOrderId. */
        public ParentOrderId: (number|Long);

        /** BracketInfoMsg OcoGroupId. */
        public OcoGroupId: (number|Long);

        /** BracketInfoMsg BracketId. */
        public BracketId: (number|Long);

        /** BracketInfoMsg SeqClientId. */
        public SeqClientId: number;

        /** BracketInfoMsg Price. */
        public Price: number;

        /** BracketInfoMsg Ticks. */
        public Ticks: number;

        /** BracketInfoMsg CalculatedPrice. */
        public CalculatedPrice: number;

        /** BracketInfoMsg TotalQty. */
        public TotalQty: number;

        /** BracketInfoMsg ReleasedQty. */
        public ReleasedQty: number;

        /** BracketInfoMsg IsTarget. */
        public IsTarget: boolean;

        /** BracketInfoMsg BracketState. */
        public BracketState: PropTradingProtocol.BracketInfoMsg.BracketStateEnum;

        /** BracketInfoMsg SnapType. */
        public SnapType: PropTradingProtocol.BracketInfoMsg.SnapTypeEnum;

        /** BracketInfoMsg AccNumber. */
        public AccNumber: (number|Long);

        /** BracketInfoMsg Reason. */
        public Reason: string;

        /** BracketInfoMsg FeedSymbol. */
        public FeedSymbol: string;

        /** BracketInfoMsg Isin. */
        public Isin: string;

        /** RESERVED FIELDS************************* */
        public ClientSessionId: (number|Long);

        /** BracketInfoMsg IsValidationError. */
        public IsValidationError: boolean;

        /**
         * Creates a new BracketInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BracketInfoMsg instance
         */
        public static create(properties?: PropTradingProtocol.IBracketInfoMsg): PropTradingProtocol.BracketInfoMsg;

        /**
         * Encodes the specified BracketInfoMsg message. Does not implicitly {@link PropTradingProtocol.BracketInfoMsg.verify|verify} messages.
         * @param message BracketInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IBracketInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BracketInfoMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.BracketInfoMsg.verify|verify} messages.
         * @param message BracketInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IBracketInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BracketInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BracketInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.BracketInfoMsg;

        /**
         * Decodes a BracketInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BracketInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.BracketInfoMsg;

        /**
         * Verifies a BracketInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BracketInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BracketInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.BracketInfoMsg;

        /**
         * Creates a plain object from a BracketInfoMsg message. Also converts values to other types if specified.
         * @param message BracketInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.BracketInfoMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BracketInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BracketInfoMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BracketInfoMsg {

        /** BracketStateEnum enum. */
        enum BracketStateEnum {
            Waiting = 0,
            Submitted = 1,
            Cancelled = 2,
            Error = 3
        }

        /** SnapTypeEnum enum. */
        enum SnapTypeEnum {
            Historical = 1,
            RealTime = 2
        }
    }

    /** Properties of a LogInfoMsg. */
    interface ILogInfoMsg {

        /** LogInfoMsg Msg */
        Msg?: (string|null);

        /** LogInfoMsg AccNumber */
        AccNumber?: (number|Long|null);
    }

    /** Represents a LogInfoMsg. */
    class LogInfoMsg implements ILogInfoMsg {

        /**
         * Constructs a new LogInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ILogInfoMsg);

        /** LogInfoMsg Msg. */
        public Msg: string;

        /** LogInfoMsg AccNumber. */
        public AccNumber: (number|Long);

        /**
         * Creates a new LogInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogInfoMsg instance
         */
        public static create(properties?: PropTradingProtocol.ILogInfoMsg): PropTradingProtocol.LogInfoMsg;

        /**
         * Encodes the specified LogInfoMsg message. Does not implicitly {@link PropTradingProtocol.LogInfoMsg.verify|verify} messages.
         * @param message LogInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ILogInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LogInfoMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.LogInfoMsg.verify|verify} messages.
         * @param message LogInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ILogInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LogInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.LogInfoMsg;

        /**
         * Decodes a LogInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LogInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.LogInfoMsg;

        /**
         * Verifies a LogInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LogInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LogInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.LogInfoMsg;

        /**
         * Creates a plain object from a LogInfoMsg message. Also converts values to other types if specified.
         * @param message LogInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.LogInfoMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LogInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LogInfoMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PositionInfoMsg. */
    interface IPositionInfoMsg {

        /** PositionInfoMsg ContractId */
        ContractId?: (number|Long|null);

        /** PositionInfoMsg OpenQuantity */
        OpenQuantity?: (number|Long|null);

        /** PositionInfoMsg OpenPrice */
        OpenPrice?: (number|null);

        /** PositionInfoMsg MarginUsed */
        MarginUsed?: (number|null);

        /** PositionInfoMsg DailyBought */
        DailyBought?: (number|Long|null);

        /** PositionInfoMsg DailySold */
        DailySold?: (number|Long|null);

        /** PositionInfoMsg DailyPl */
        DailyPl?: (number|null);

        /** PositionInfoMsg HasOpenPl */
        HasOpenPl?: (boolean|null);

        /** PositionInfoMsg OpenPl */
        OpenPl?: (number|null);

        /** PositionInfoMsg DailyCommissions */
        DailyCommissions?: (number|null);

        /** PositionInfoMsg SnapType */
        SnapType?: (PropTradingProtocol.PositionInfoMsg.SnapTypeEnum|null);

        /** PositionInfoMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** PositionInfoMsg FeedSymbol */
        FeedSymbol?: (string|null);

        /** PositionInfoMsg Isin */
        Isin?: (string|null);

        /** PositionInfoMsg PositionId */
        PositionId?: (number|Long|null);

        /** PositionInfoMsg Utc */
        Utc?: (number|Long|null);

        /** PositionInfoMsg ConvertedDailyPl */
        ConvertedDailyPl?: (number|null);

        /** PositionInfoMsg ConvertedDailyCommissions */
        ConvertedDailyCommissions?: (number|null);

        /** PositionInfoMsg ConvertedOpenPl */
        ConvertedOpenPl?: (number|null);

        /** PositionInfoMsg EntryOrderId */
        EntryOrderId?: (number|Long|null);
    }

    /** Represents a PositionInfoMsg. */
    class PositionInfoMsg implements IPositionInfoMsg {

        /**
         * Constructs a new PositionInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IPositionInfoMsg);

        /** PositionInfoMsg ContractId. */
        public ContractId: (number|Long);

        /** PositionInfoMsg OpenQuantity. */
        public OpenQuantity: (number|Long);

        /** PositionInfoMsg OpenPrice. */
        public OpenPrice: number;

        /** PositionInfoMsg MarginUsed. */
        public MarginUsed: number;

        /** PositionInfoMsg DailyBought. */
        public DailyBought: (number|Long);

        /** PositionInfoMsg DailySold. */
        public DailySold: (number|Long);

        /** PositionInfoMsg DailyPl. */
        public DailyPl: number;

        /** PositionInfoMsg HasOpenPl. */
        public HasOpenPl: boolean;

        /** PositionInfoMsg OpenPl. */
        public OpenPl: number;

        /** PositionInfoMsg DailyCommissions. */
        public DailyCommissions: number;

        /** PositionInfoMsg SnapType. */
        public SnapType: PropTradingProtocol.PositionInfoMsg.SnapTypeEnum;

        /** PositionInfoMsg AccNumber. */
        public AccNumber: (number|Long);

        /** PositionInfoMsg FeedSymbol. */
        public FeedSymbol: string;

        /** PositionInfoMsg Isin. */
        public Isin: string;

        /** PositionInfoMsg PositionId. */
        public PositionId: (number|Long);

        /** PositionInfoMsg Utc. */
        public Utc: (number|Long);

        /** PositionInfoMsg ConvertedDailyPl. */
        public ConvertedDailyPl: number;

        /** PositionInfoMsg ConvertedDailyCommissions. */
        public ConvertedDailyCommissions: number;

        /** PositionInfoMsg ConvertedOpenPl. */
        public ConvertedOpenPl: number;

        /** PositionInfoMsg EntryOrderId. */
        public EntryOrderId: (number|Long);

        /**
         * Creates a new PositionInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PositionInfoMsg instance
         */
        public static create(properties?: PropTradingProtocol.IPositionInfoMsg): PropTradingProtocol.PositionInfoMsg;

        /**
         * Encodes the specified PositionInfoMsg message. Does not implicitly {@link PropTradingProtocol.PositionInfoMsg.verify|verify} messages.
         * @param message PositionInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IPositionInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PositionInfoMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.PositionInfoMsg.verify|verify} messages.
         * @param message PositionInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IPositionInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PositionInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PositionInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.PositionInfoMsg;

        /**
         * Decodes a PositionInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PositionInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.PositionInfoMsg;

        /**
         * Verifies a PositionInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PositionInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PositionInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.PositionInfoMsg;

        /**
         * Creates a plain object from a PositionInfoMsg message. Also converts values to other types if specified.
         * @param message PositionInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.PositionInfoMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PositionInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PositionInfoMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PositionInfoMsg {

        /** SnapTypeEnum enum. */
        enum SnapTypeEnum {
            Historical = 1,
            RealTime = 2
        }
    }

    /** Properties of a BalanceMsg. */
    interface IBalanceMsg {

        /** BalanceMsg Balance */
        Balance?: (number|null);

        /** BalanceMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** BalanceMsg Description */
        Description?: (string|null);

        /** BalanceMsg MarginUsed */
        MarginUsed?: (number|null);

        /** BalanceMsg StopDrawdownOverall */
        StopDrawdownOverall?: (number|null);

        /** BalanceMsg StopDrawdownIntraday */
        StopDrawdownIntraday?: (number|null);

        /** BalanceMsg ProfitTarget */
        ProfitTarget?: (number|null);

        /** BalanceMsg MarginAvailable */
        MarginAvailable?: (number|null);

        /** BalanceMsg StopDrawdownWeekly */
        StopDrawdownWeekly?: (number|null);

        /** BalanceMsg Equity */
        Equity?: (number|null);

        /** BalanceMsg DailyPl */
        DailyPl?: (number|null);

        /** BalanceMsg DailyNetPl */
        DailyNetPl?: (number|null);

        /** BalanceMsg Details */
        Details?: (PropTradingProtocol.IBalanceDetailedMsg|null);
    }

    /** Represents a BalanceMsg. */
    class BalanceMsg implements IBalanceMsg {

        /**
         * Constructs a new BalanceMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IBalanceMsg);

        /** BalanceMsg Balance. */
        public Balance: number;

        /** BalanceMsg AccNumber. */
        public AccNumber: (number|Long);

        /** BalanceMsg Description. */
        public Description: string;

        /** BalanceMsg MarginUsed. */
        public MarginUsed: number;

        /** BalanceMsg StopDrawdownOverall. */
        public StopDrawdownOverall: number;

        /** BalanceMsg StopDrawdownIntraday. */
        public StopDrawdownIntraday: number;

        /** BalanceMsg ProfitTarget. */
        public ProfitTarget: number;

        /** BalanceMsg MarginAvailable. */
        public MarginAvailable: number;

        /** BalanceMsg StopDrawdownWeekly. */
        public StopDrawdownWeekly: number;

        /** BalanceMsg Equity. */
        public Equity: number;

        /** BalanceMsg DailyPl. */
        public DailyPl: number;

        /** BalanceMsg DailyNetPl. */
        public DailyNetPl: number;

        /** BalanceMsg Details. */
        public Details?: (PropTradingProtocol.IBalanceDetailedMsg|null);

        /**
         * Creates a new BalanceMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BalanceMsg instance
         */
        public static create(properties?: PropTradingProtocol.IBalanceMsg): PropTradingProtocol.BalanceMsg;

        /**
         * Encodes the specified BalanceMsg message. Does not implicitly {@link PropTradingProtocol.BalanceMsg.verify|verify} messages.
         * @param message BalanceMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IBalanceMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BalanceMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.BalanceMsg.verify|verify} messages.
         * @param message BalanceMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IBalanceMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BalanceMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BalanceMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.BalanceMsg;

        /**
         * Decodes a BalanceMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BalanceMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.BalanceMsg;

        /**
         * Verifies a BalanceMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BalanceMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BalanceMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.BalanceMsg;

        /**
         * Creates a plain object from a BalanceMsg message. Also converts values to other types if specified.
         * @param message BalanceMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.BalanceMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BalanceMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BalanceMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BalanceDetailedMsg. */
    interface IBalanceDetailedMsg {

        /** BalanceDetailedMsg Empty */
        Empty?: (boolean|null);

        /** BalanceDetailedMsg StopDrawdownOverallValue */
        StopDrawdownOverallValue?: (number|null);

        /** BalanceDetailedMsg StopDrawdownIntradayValue */
        StopDrawdownIntradayValue?: (number|null);

        /** BalanceDetailedMsg ProfitTargetValue */
        ProfitTargetValue?: (number|null);

        /** BalanceDetailedMsg StopDrawdownWeeklyValue */
        StopDrawdownWeeklyValue?: (number|null);

        /** BalanceDetailedMsg UserDrawdownDailyBalance */
        UserDrawdownDailyBalance?: (number|null);

        /** BalanceDetailedMsg UserDrawdownWeeklyBalance */
        UserDrawdownWeeklyBalance?: (number|null);

        /** BalanceDetailedMsg UserProfitDailyBalance */
        UserProfitDailyBalance?: (number|null);

        /** BalanceDetailedMsg UserProfitWeeklyBalance */
        UserProfitWeeklyBalance?: (number|null);

        /** BalanceDetailedMsg UserDrawdownDailyValue */
        UserDrawdownDailyValue?: (number|null);

        /** BalanceDetailedMsg UserDrawdownWeeklyValue */
        UserDrawdownWeeklyValue?: (number|null);

        /** BalanceDetailedMsg UserProfitDailyValue */
        UserProfitDailyValue?: (number|null);

        /** BalanceDetailedMsg UserProfitWeeklyValue */
        UserProfitWeeklyValue?: (number|null);

        /** BalanceDetailedMsg SessionsNumber */
        SessionsNumber?: (number|null);

        /** BalanceDetailedMsg SessionsNumberTarget */
        SessionsNumberTarget?: (number|null);

        /** BalanceDetailedMsg StartBalance */
        StartBalance?: (number|null);
    }

    /** Represents a BalanceDetailedMsg. */
    class BalanceDetailedMsg implements IBalanceDetailedMsg {

        /**
         * Constructs a new BalanceDetailedMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IBalanceDetailedMsg);

        /** BalanceDetailedMsg Empty. */
        public Empty: boolean;

        /** BalanceDetailedMsg StopDrawdownOverallValue. */
        public StopDrawdownOverallValue: number;

        /** BalanceDetailedMsg StopDrawdownIntradayValue. */
        public StopDrawdownIntradayValue: number;

        /** BalanceDetailedMsg ProfitTargetValue. */
        public ProfitTargetValue: number;

        /** BalanceDetailedMsg StopDrawdownWeeklyValue. */
        public StopDrawdownWeeklyValue: number;

        /** BalanceDetailedMsg UserDrawdownDailyBalance. */
        public UserDrawdownDailyBalance: number;

        /** BalanceDetailedMsg UserDrawdownWeeklyBalance. */
        public UserDrawdownWeeklyBalance: number;

        /** BalanceDetailedMsg UserProfitDailyBalance. */
        public UserProfitDailyBalance: number;

        /** BalanceDetailedMsg UserProfitWeeklyBalance. */
        public UserProfitWeeklyBalance: number;

        /** BalanceDetailedMsg UserDrawdownDailyValue. */
        public UserDrawdownDailyValue: number;

        /** BalanceDetailedMsg UserDrawdownWeeklyValue. */
        public UserDrawdownWeeklyValue: number;

        /** BalanceDetailedMsg UserProfitDailyValue. */
        public UserProfitDailyValue: number;

        /** BalanceDetailedMsg UserProfitWeeklyValue. */
        public UserProfitWeeklyValue: number;

        /** BalanceDetailedMsg SessionsNumber. */
        public SessionsNumber: number;

        /** BalanceDetailedMsg SessionsNumberTarget. */
        public SessionsNumberTarget: number;

        /** BalanceDetailedMsg StartBalance. */
        public StartBalance: number;

        /**
         * Creates a new BalanceDetailedMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BalanceDetailedMsg instance
         */
        public static create(properties?: PropTradingProtocol.IBalanceDetailedMsg): PropTradingProtocol.BalanceDetailedMsg;

        /**
         * Encodes the specified BalanceDetailedMsg message. Does not implicitly {@link PropTradingProtocol.BalanceDetailedMsg.verify|verify} messages.
         * @param message BalanceDetailedMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IBalanceDetailedMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BalanceDetailedMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.BalanceDetailedMsg.verify|verify} messages.
         * @param message BalanceDetailedMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IBalanceDetailedMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BalanceDetailedMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BalanceDetailedMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.BalanceDetailedMsg;

        /**
         * Decodes a BalanceDetailedMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BalanceDetailedMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.BalanceDetailedMsg;

        /**
         * Verifies a BalanceDetailedMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BalanceDetailedMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BalanceDetailedMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.BalanceDetailedMsg;

        /**
         * Creates a plain object from a BalanceDetailedMsg message. Also converts values to other types if specified.
         * @param message BalanceDetailedMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.BalanceDetailedMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BalanceDetailedMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BalanceDetailedMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SymbolLookupReqMsg. */
    interface ISymbolLookupReqMsg {

        /** SymbolLookupReqMsg RequestId */
        RequestId?: (number|Long|null);

        /** SymbolLookupReqMsg Filter */
        Filter?: (string|null);
    }

    /** Represents a SymbolLookupReqMsg. */
    class SymbolLookupReqMsg implements ISymbolLookupReqMsg {

        /**
         * Constructs a new SymbolLookupReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ISymbolLookupReqMsg);

        /** SymbolLookupReqMsg RequestId. */
        public RequestId: (number|Long);

        /** SymbolLookupReqMsg Filter. */
        public Filter: string;

        /**
         * Creates a new SymbolLookupReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SymbolLookupReqMsg instance
         */
        public static create(properties?: PropTradingProtocol.ISymbolLookupReqMsg): PropTradingProtocol.SymbolLookupReqMsg;

        /**
         * Encodes the specified SymbolLookupReqMsg message. Does not implicitly {@link PropTradingProtocol.SymbolLookupReqMsg.verify|verify} messages.
         * @param message SymbolLookupReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ISymbolLookupReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SymbolLookupReqMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.SymbolLookupReqMsg.verify|verify} messages.
         * @param message SymbolLookupReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ISymbolLookupReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SymbolLookupReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SymbolLookupReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.SymbolLookupReqMsg;

        /**
         * Decodes a SymbolLookupReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SymbolLookupReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.SymbolLookupReqMsg;

        /**
         * Verifies a SymbolLookupReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SymbolLookupReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SymbolLookupReqMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.SymbolLookupReqMsg;

        /**
         * Creates a plain object from a SymbolLookupReqMsg message. Also converts values to other types if specified.
         * @param message SymbolLookupReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.SymbolLookupReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SymbolLookupReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SymbolLookupReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SymbolLookupRespMsg. */
    interface ISymbolLookupRespMsg {

        /** SymbolLookupRespMsg RequestId */
        RequestId?: (number|Long|null);

        /** SymbolLookupRespMsg Symbols */
        Symbols?: (PropTradingProtocol.ISymbolLookupInfo[]|null);
    }

    /** Represents a SymbolLookupRespMsg. */
    class SymbolLookupRespMsg implements ISymbolLookupRespMsg {

        /**
         * Constructs a new SymbolLookupRespMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ISymbolLookupRespMsg);

        /** SymbolLookupRespMsg RequestId. */
        public RequestId: (number|Long);

        /** SymbolLookupRespMsg Symbols. */
        public Symbols: PropTradingProtocol.ISymbolLookupInfo[];

        /**
         * Creates a new SymbolLookupRespMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SymbolLookupRespMsg instance
         */
        public static create(properties?: PropTradingProtocol.ISymbolLookupRespMsg): PropTradingProtocol.SymbolLookupRespMsg;

        /**
         * Encodes the specified SymbolLookupRespMsg message. Does not implicitly {@link PropTradingProtocol.SymbolLookupRespMsg.verify|verify} messages.
         * @param message SymbolLookupRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ISymbolLookupRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SymbolLookupRespMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.SymbolLookupRespMsg.verify|verify} messages.
         * @param message SymbolLookupRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ISymbolLookupRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SymbolLookupRespMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SymbolLookupRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.SymbolLookupRespMsg;

        /**
         * Decodes a SymbolLookupRespMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SymbolLookupRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.SymbolLookupRespMsg;

        /**
         * Verifies a SymbolLookupRespMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SymbolLookupRespMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SymbolLookupRespMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.SymbolLookupRespMsg;

        /**
         * Creates a plain object from a SymbolLookupRespMsg message. Also converts values to other types if specified.
         * @param message SymbolLookupRespMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.SymbolLookupRespMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SymbolLookupRespMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SymbolLookupRespMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SymbolLookupInfo. */
    interface ISymbolLookupInfo {

        /** SymbolLookupInfo Symbol */
        Symbol?: (string|null);

        /** SymbolLookupInfo Description */
        Description?: (string|null);

        /** SymbolLookupInfo Exchange */
        Exchange?: (string|null);

        /** SymbolLookupInfo TickSize */
        TickSize?: (number|null);

        /** SymbolLookupInfo OrderCommission */
        OrderCommission?: (number|null);

        /** SymbolLookupInfo Category */
        Category?: (PropTradingProtocol.SymbolCategoryEnum|null);

        /** SymbolLookupInfo DataFeedProduct */
        DataFeedProduct?: (string|null);

        /** SymbolLookupInfo ContractId */
        ContractId?: (number|Long|null);

        /** SymbolLookupInfo TradingInhibited */
        TradingInhibited?: (boolean|null);

        /** SymbolLookupInfo TradableQuantityFractionable */
        TradableQuantityFractionable?: (number|null);

        /** SymbolLookupInfo TradableQuantityMinimum */
        TradableQuantityMinimum?: (number|null);
    }

    /** Represents a SymbolLookupInfo. */
    class SymbolLookupInfo implements ISymbolLookupInfo {

        /**
         * Constructs a new SymbolLookupInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ISymbolLookupInfo);

        /** SymbolLookupInfo Symbol. */
        public Symbol: string;

        /** SymbolLookupInfo Description. */
        public Description: string;

        /** SymbolLookupInfo Exchange. */
        public Exchange: string;

        /** SymbolLookupInfo TickSize. */
        public TickSize: number;

        /** SymbolLookupInfo OrderCommission. */
        public OrderCommission: number;

        /** SymbolLookupInfo Category. */
        public Category: PropTradingProtocol.SymbolCategoryEnum;

        /** SymbolLookupInfo DataFeedProduct. */
        public DataFeedProduct: string;

        /** SymbolLookupInfo ContractId. */
        public ContractId: (number|Long);

        /** SymbolLookupInfo TradingInhibited. */
        public TradingInhibited: boolean;

        /** SymbolLookupInfo TradableQuantityFractionable. */
        public TradableQuantityFractionable: number;

        /** SymbolLookupInfo TradableQuantityMinimum. */
        public TradableQuantityMinimum: number;

        /**
         * Creates a new SymbolLookupInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SymbolLookupInfo instance
         */
        public static create(properties?: PropTradingProtocol.ISymbolLookupInfo): PropTradingProtocol.SymbolLookupInfo;

        /**
         * Encodes the specified SymbolLookupInfo message. Does not implicitly {@link PropTradingProtocol.SymbolLookupInfo.verify|verify} messages.
         * @param message SymbolLookupInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ISymbolLookupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SymbolLookupInfo message, length delimited. Does not implicitly {@link PropTradingProtocol.SymbolLookupInfo.verify|verify} messages.
         * @param message SymbolLookupInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ISymbolLookupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SymbolLookupInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SymbolLookupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.SymbolLookupInfo;

        /**
         * Decodes a SymbolLookupInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SymbolLookupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.SymbolLookupInfo;

        /**
         * Verifies a SymbolLookupInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SymbolLookupInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SymbolLookupInfo
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.SymbolLookupInfo;

        /**
         * Creates a plain object from a SymbolLookupInfo message. Also converts values to other types if specified.
         * @param message SymbolLookupInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.SymbolLookupInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SymbolLookupInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SymbolLookupInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** OrderPositionFilterEnum enum. */
    enum OrderPositionFilterEnum {
        ALL = 0,
        BUY = 1,
        SELL = 2,
        WINNER = 3,
        LOOSER = 4
    }

    /** Properties of a CancelFlatReqMsg. */
    interface ICancelFlatReqMsg {

        /** CancelFlatReqMsg RequestId */
        RequestId?: (number|Long|null);

        /** CancelFlatReqMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** CancelFlatReqMsg ContractsId */
        ContractsId?: ((number|Long)[]|null);

        /** CancelFlatReqMsg Action */
        Action?: (PropTradingProtocol.CancelFlatReqMsg.ActionEnum|null);

        /** CancelFlatReqMsg Source */
        Source?: (PropTradingProtocol.RequestSourceEnum|null);

        /** CancelFlatReqMsg Filter */
        Filter?: (PropTradingProtocol.OrderPositionFilterEnum|null);

        /** CancelFlatReqMsg CancelExcludeOco */
        CancelExcludeOco?: (boolean|null);
    }

    /** Represents a CancelFlatReqMsg. */
    class CancelFlatReqMsg implements ICancelFlatReqMsg {

        /**
         * Constructs a new CancelFlatReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ICancelFlatReqMsg);

        /** CancelFlatReqMsg RequestId. */
        public RequestId: (number|Long);

        /** CancelFlatReqMsg AccNumber. */
        public AccNumber: (number|Long);

        /** CancelFlatReqMsg ContractsId. */
        public ContractsId: (number|Long)[];

        /** CancelFlatReqMsg Action. */
        public Action: PropTradingProtocol.CancelFlatReqMsg.ActionEnum;

        /** CancelFlatReqMsg Source. */
        public Source: PropTradingProtocol.RequestSourceEnum;

        /** CancelFlatReqMsg Filter. */
        public Filter: PropTradingProtocol.OrderPositionFilterEnum;

        /** CancelFlatReqMsg CancelExcludeOco. */
        public CancelExcludeOco: boolean;

        /**
         * Creates a new CancelFlatReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelFlatReqMsg instance
         */
        public static create(properties?: PropTradingProtocol.ICancelFlatReqMsg): PropTradingProtocol.CancelFlatReqMsg;

        /**
         * Encodes the specified CancelFlatReqMsg message. Does not implicitly {@link PropTradingProtocol.CancelFlatReqMsg.verify|verify} messages.
         * @param message CancelFlatReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ICancelFlatReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelFlatReqMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.CancelFlatReqMsg.verify|verify} messages.
         * @param message CancelFlatReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ICancelFlatReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelFlatReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelFlatReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.CancelFlatReqMsg;

        /**
         * Decodes a CancelFlatReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelFlatReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.CancelFlatReqMsg;

        /**
         * Verifies a CancelFlatReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelFlatReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelFlatReqMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.CancelFlatReqMsg;

        /**
         * Creates a plain object from a CancelFlatReqMsg message. Also converts values to other types if specified.
         * @param message CancelFlatReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.CancelFlatReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelFlatReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CancelFlatReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CancelFlatReqMsg {

        /** ActionEnum enum. */
        enum ActionEnum {
            FLAT = 0,
            CANCEL = 1,
            FLAT_CANCEL = 2
        }
    }

    /** Properties of a CancelFlatRespMsg. */
    interface ICancelFlatRespMsg {

        /** CancelFlatRespMsg RequestId */
        RequestId?: (number|Long|null);

        /** CancelFlatRespMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** CancelFlatRespMsg Errors */
        Errors?: (PropTradingProtocol.ICancelFlatErrorDetail[]|null);

        /** CancelFlatRespMsg Items */
        Items?: (PropTradingProtocol.ICancelFlatItemDetail[]|null);
    }

    /** Represents a CancelFlatRespMsg. */
    class CancelFlatRespMsg implements ICancelFlatRespMsg {

        /**
         * Constructs a new CancelFlatRespMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ICancelFlatRespMsg);

        /** CancelFlatRespMsg RequestId. */
        public RequestId: (number|Long);

        /** CancelFlatRespMsg AccNumber. */
        public AccNumber: (number|Long);

        /** CancelFlatRespMsg Errors. */
        public Errors: PropTradingProtocol.ICancelFlatErrorDetail[];

        /** CancelFlatRespMsg Items. */
        public Items: PropTradingProtocol.ICancelFlatItemDetail[];

        /**
         * Creates a new CancelFlatRespMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelFlatRespMsg instance
         */
        public static create(properties?: PropTradingProtocol.ICancelFlatRespMsg): PropTradingProtocol.CancelFlatRespMsg;

        /**
         * Encodes the specified CancelFlatRespMsg message. Does not implicitly {@link PropTradingProtocol.CancelFlatRespMsg.verify|verify} messages.
         * @param message CancelFlatRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ICancelFlatRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelFlatRespMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.CancelFlatRespMsg.verify|verify} messages.
         * @param message CancelFlatRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ICancelFlatRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelFlatRespMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelFlatRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.CancelFlatRespMsg;

        /**
         * Decodes a CancelFlatRespMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelFlatRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.CancelFlatRespMsg;

        /**
         * Verifies a CancelFlatRespMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelFlatRespMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelFlatRespMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.CancelFlatRespMsg;

        /**
         * Creates a plain object from a CancelFlatRespMsg message. Also converts values to other types if specified.
         * @param message CancelFlatRespMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.CancelFlatRespMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelFlatRespMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CancelFlatRespMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CancelFlatItemDetail. */
    interface ICancelFlatItemDetail {

        /** CancelFlatItemDetail IsPosition */
        IsPosition?: (boolean|null);

        /** CancelFlatItemDetail FeedSymbol */
        FeedSymbol?: (string|null);

        /** CancelFlatItemDetail ContractId */
        ContractId?: (number|Long|null);

        /** CancelFlatItemDetail PositionId */
        PositionId?: (number|Long|null);

        /** ORDER*************** */
        OrderId?: (number|Long|null);
    }

    /** Represents a CancelFlatItemDetail. */
    class CancelFlatItemDetail implements ICancelFlatItemDetail {

        /**
         * Constructs a new CancelFlatItemDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ICancelFlatItemDetail);

        /** CancelFlatItemDetail IsPosition. */
        public IsPosition: boolean;

        /** CancelFlatItemDetail FeedSymbol. */
        public FeedSymbol: string;

        /** CancelFlatItemDetail ContractId. */
        public ContractId: (number|Long);

        /** CancelFlatItemDetail PositionId. */
        public PositionId: (number|Long);

        /** ORDER*************** */
        public OrderId: (number|Long);

        /**
         * Creates a new CancelFlatItemDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelFlatItemDetail instance
         */
        public static create(properties?: PropTradingProtocol.ICancelFlatItemDetail): PropTradingProtocol.CancelFlatItemDetail;

        /**
         * Encodes the specified CancelFlatItemDetail message. Does not implicitly {@link PropTradingProtocol.CancelFlatItemDetail.verify|verify} messages.
         * @param message CancelFlatItemDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ICancelFlatItemDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelFlatItemDetail message, length delimited. Does not implicitly {@link PropTradingProtocol.CancelFlatItemDetail.verify|verify} messages.
         * @param message CancelFlatItemDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ICancelFlatItemDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelFlatItemDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelFlatItemDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.CancelFlatItemDetail;

        /**
         * Decodes a CancelFlatItemDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelFlatItemDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.CancelFlatItemDetail;

        /**
         * Verifies a CancelFlatItemDetail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelFlatItemDetail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelFlatItemDetail
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.CancelFlatItemDetail;

        /**
         * Creates a plain object from a CancelFlatItemDetail message. Also converts values to other types if specified.
         * @param message CancelFlatItemDetail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.CancelFlatItemDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelFlatItemDetail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CancelFlatItemDetail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CancelFlatErrorDetail. */
    interface ICancelFlatErrorDetail {

        /** CancelFlatErrorDetail ContractId */
        ContractId?: (number|Long|null);

        /** CancelFlatErrorDetail Error */
        Error?: (string|null);
    }

    /** Represents a CancelFlatErrorDetail. */
    class CancelFlatErrorDetail implements ICancelFlatErrorDetail {

        /**
         * Constructs a new CancelFlatErrorDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ICancelFlatErrorDetail);

        /** CancelFlatErrorDetail ContractId. */
        public ContractId: (number|Long);

        /** CancelFlatErrorDetail Error. */
        public Error: string;

        /**
         * Creates a new CancelFlatErrorDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelFlatErrorDetail instance
         */
        public static create(properties?: PropTradingProtocol.ICancelFlatErrorDetail): PropTradingProtocol.CancelFlatErrorDetail;

        /**
         * Encodes the specified CancelFlatErrorDetail message. Does not implicitly {@link PropTradingProtocol.CancelFlatErrorDetail.verify|verify} messages.
         * @param message CancelFlatErrorDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ICancelFlatErrorDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelFlatErrorDetail message, length delimited. Does not implicitly {@link PropTradingProtocol.CancelFlatErrorDetail.verify|verify} messages.
         * @param message CancelFlatErrorDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ICancelFlatErrorDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelFlatErrorDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelFlatErrorDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.CancelFlatErrorDetail;

        /**
         * Decodes a CancelFlatErrorDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelFlatErrorDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.CancelFlatErrorDetail;

        /**
         * Verifies a CancelFlatErrorDetail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelFlatErrorDetail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelFlatErrorDetail
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.CancelFlatErrorDetail;

        /**
         * Creates a plain object from a CancelFlatErrorDetail message. Also converts values to other types if specified.
         * @param message CancelFlatErrorDetail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.CancelFlatErrorDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelFlatErrorDetail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CancelFlatErrorDetail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CancelReverseReqMsg. */
    interface ICancelReverseReqMsg {

        /** CancelReverseReqMsg RequestId */
        RequestId?: (number|Long|null);

        /** CancelReverseReqMsg AccNumber */
        AccNumber?: (number|Long|null);

        /** CancelReverseReqMsg ContractId */
        ContractId?: (number|Long|null);

        /** CancelReverseReqMsg Action */
        Action?: (PropTradingProtocol.CancelReverseReqMsg.ActionEnum|null);

        /** CancelReverseReqMsg Source */
        Source?: (PropTradingProtocol.RequestSourceEnum|null);
    }

    /** Represents a CancelReverseReqMsg. */
    class CancelReverseReqMsg implements ICancelReverseReqMsg {

        /**
         * Constructs a new CancelReverseReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ICancelReverseReqMsg);

        /** CancelReverseReqMsg RequestId. */
        public RequestId: (number|Long);

        /** CancelReverseReqMsg AccNumber. */
        public AccNumber: (number|Long);

        /** CancelReverseReqMsg ContractId. */
        public ContractId: (number|Long);

        /** CancelReverseReqMsg Action. */
        public Action: PropTradingProtocol.CancelReverseReqMsg.ActionEnum;

        /** CancelReverseReqMsg Source. */
        public Source: PropTradingProtocol.RequestSourceEnum;

        /**
         * Creates a new CancelReverseReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelReverseReqMsg instance
         */
        public static create(properties?: PropTradingProtocol.ICancelReverseReqMsg): PropTradingProtocol.CancelReverseReqMsg;

        /**
         * Encodes the specified CancelReverseReqMsg message. Does not implicitly {@link PropTradingProtocol.CancelReverseReqMsg.verify|verify} messages.
         * @param message CancelReverseReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ICancelReverseReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelReverseReqMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.CancelReverseReqMsg.verify|verify} messages.
         * @param message CancelReverseReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ICancelReverseReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelReverseReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelReverseReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.CancelReverseReqMsg;

        /**
         * Decodes a CancelReverseReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelReverseReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.CancelReverseReqMsg;

        /**
         * Verifies a CancelReverseReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelReverseReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelReverseReqMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.CancelReverseReqMsg;

        /**
         * Creates a plain object from a CancelReverseReqMsg message. Also converts values to other types if specified.
         * @param message CancelReverseReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.CancelReverseReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelReverseReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CancelReverseReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CancelReverseReqMsg {

        /** ActionEnum enum. */
        enum ActionEnum {
            REVERSE = 0,
            CANCEL = 1,
            REVERSE_CANCEL = 2
        }
    }

    /** Properties of a CancelReverseRespMsg. */
    interface ICancelReverseRespMsg {

        /** CancelReverseRespMsg RequestId */
        RequestId?: (number|Long|null);

        /** CancelReverseRespMsg Success */
        Success?: (boolean|null);

        /** CancelReverseRespMsg Error */
        Error?: (string|null);
    }

    /** Represents a CancelReverseRespMsg. */
    class CancelReverseRespMsg implements ICancelReverseRespMsg {

        /**
         * Constructs a new CancelReverseRespMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ICancelReverseRespMsg);

        /** CancelReverseRespMsg RequestId. */
        public RequestId: (number|Long);

        /** CancelReverseRespMsg Success. */
        public Success: boolean;

        /** CancelReverseRespMsg Error. */
        public Error: string;

        /**
         * Creates a new CancelReverseRespMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelReverseRespMsg instance
         */
        public static create(properties?: PropTradingProtocol.ICancelReverseRespMsg): PropTradingProtocol.CancelReverseRespMsg;

        /**
         * Encodes the specified CancelReverseRespMsg message. Does not implicitly {@link PropTradingProtocol.CancelReverseRespMsg.verify|verify} messages.
         * @param message CancelReverseRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ICancelReverseRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelReverseRespMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.CancelReverseRespMsg.verify|verify} messages.
         * @param message CancelReverseRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ICancelReverseRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelReverseRespMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelReverseRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.CancelReverseRespMsg;

        /**
         * Decodes a CancelReverseRespMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelReverseRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.CancelReverseRespMsg;

        /**
         * Verifies a CancelReverseRespMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelReverseRespMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelReverseRespMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.CancelReverseRespMsg;

        /**
         * Creates a plain object from a CancelReverseRespMsg message. Also converts values to other types if specified.
         * @param message CancelReverseRespMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.CancelReverseRespMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelReverseRespMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CancelReverseRespMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BracketInsertReportMsg. */
    interface IBracketInsertReportMsg {

        /** BracketInsertReportMsg RequestId */
        RequestId?: (number|Long|null);

        /** BracketInsertReportMsg Success */
        Success?: (boolean|null);

        /** BracketInsertReportMsg Reason */
        Reason?: (string|null);
    }

    /** Represents a BracketInsertReportMsg. */
    class BracketInsertReportMsg implements IBracketInsertReportMsg {

        /**
         * Constructs a new BracketInsertReportMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IBracketInsertReportMsg);

        /** BracketInsertReportMsg RequestId. */
        public RequestId: (number|Long);

        /** BracketInsertReportMsg Success. */
        public Success: boolean;

        /** BracketInsertReportMsg Reason. */
        public Reason: string;

        /**
         * Creates a new BracketInsertReportMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BracketInsertReportMsg instance
         */
        public static create(properties?: PropTradingProtocol.IBracketInsertReportMsg): PropTradingProtocol.BracketInsertReportMsg;

        /**
         * Encodes the specified BracketInsertReportMsg message. Does not implicitly {@link PropTradingProtocol.BracketInsertReportMsg.verify|verify} messages.
         * @param message BracketInsertReportMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IBracketInsertReportMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BracketInsertReportMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.BracketInsertReportMsg.verify|verify} messages.
         * @param message BracketInsertReportMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IBracketInsertReportMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BracketInsertReportMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BracketInsertReportMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.BracketInsertReportMsg;

        /**
         * Decodes a BracketInsertReportMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BracketInsertReportMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.BracketInsertReportMsg;

        /**
         * Verifies a BracketInsertReportMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BracketInsertReportMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BracketInsertReportMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.BracketInsertReportMsg;

        /**
         * Creates a plain object from a BracketInsertReportMsg message. Also converts values to other types if specified.
         * @param message BracketInsertReportMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.BracketInsertReportMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BracketInsertReportMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BracketInsertReportMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** EntityActionEnum enum. */
    enum EntityActionEnum {
        SNAPSHOT = 0,
        ADD = 1,
        UPDATE = 2,
        REMOVE = 3
    }

    /** Properties of an AccountStatusUpdateMsg. */
    interface IAccountStatusUpdateMsg {

        /** AccountStatusUpdateMsg AccountId */
        AccountId?: (number|Long|null);

        /** AccountStatusUpdateMsg Action */
        Action?: (PropTradingProtocol.EntityActionEnum|null);

        /** AccountStatusUpdateMsg Info */
        Info?: (PropTradingProtocol.IAccountHeaderMsg|null);
    }

    /** Represents an AccountStatusUpdateMsg. */
    class AccountStatusUpdateMsg implements IAccountStatusUpdateMsg {

        /**
         * Constructs a new AccountStatusUpdateMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountStatusUpdateMsg);

        /** AccountStatusUpdateMsg AccountId. */
        public AccountId: (number|Long);

        /** AccountStatusUpdateMsg Action. */
        public Action: PropTradingProtocol.EntityActionEnum;

        /** AccountStatusUpdateMsg Info. */
        public Info?: (PropTradingProtocol.IAccountHeaderMsg|null);

        /**
         * Creates a new AccountStatusUpdateMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountStatusUpdateMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountStatusUpdateMsg): PropTradingProtocol.AccountStatusUpdateMsg;

        /**
         * Encodes the specified AccountStatusUpdateMsg message. Does not implicitly {@link PropTradingProtocol.AccountStatusUpdateMsg.verify|verify} messages.
         * @param message AccountStatusUpdateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountStatusUpdateMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountStatusUpdateMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountStatusUpdateMsg.verify|verify} messages.
         * @param message AccountStatusUpdateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountStatusUpdateMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountStatusUpdateMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountStatusUpdateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountStatusUpdateMsg;

        /**
         * Decodes an AccountStatusUpdateMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountStatusUpdateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountStatusUpdateMsg;

        /**
         * Verifies an AccountStatusUpdateMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountStatusUpdateMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountStatusUpdateMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountStatusUpdateMsg;

        /**
         * Creates a plain object from an AccountStatusUpdateMsg message. Also converts values to other types if specified.
         * @param message AccountStatusUpdateMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountStatusUpdateMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountStatusUpdateMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountStatusUpdateMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FillReportMsg. */
    interface IFillReportMsg {

        /** FillReportMsg AccountId */
        AccountId?: (number|Long|null);

        /** FillReportMsg FillId */
        FillId?: (number|Long|null);

        /** FillReportMsg ContractId */
        ContractId?: (number|Long|null);

        /** FillReportMsg FeedSymbol */
        FeedSymbol?: (string|null);

        /** FillReportMsg Utc */
        Utc?: (number|Long|null);

        /** FillReportMsg Price */
        Price?: (number|null);

        /** FillReportMsg Quantity */
        Quantity?: (number|null);

        /** FillReportMsg Commissions */
        Commissions?: (number|null);

        /** FillReportMsg SourceOrderId */
        SourceOrderId?: (number|Long|null);

        /** FillReportMsg SourceOrderIp */
        SourceOrderIp?: (string|null);
    }

    /** Represents a FillReportMsg. */
    class FillReportMsg implements IFillReportMsg {

        /**
         * Constructs a new FillReportMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IFillReportMsg);

        /** FillReportMsg AccountId. */
        public AccountId: (number|Long);

        /** FillReportMsg FillId. */
        public FillId: (number|Long);

        /** FillReportMsg ContractId. */
        public ContractId: (number|Long);

        /** FillReportMsg FeedSymbol. */
        public FeedSymbol: string;

        /** FillReportMsg Utc. */
        public Utc: (number|Long);

        /** FillReportMsg Price. */
        public Price: number;

        /** FillReportMsg Quantity. */
        public Quantity: number;

        /** FillReportMsg Commissions. */
        public Commissions: number;

        /** FillReportMsg SourceOrderId. */
        public SourceOrderId: (number|Long);

        /** FillReportMsg SourceOrderIp. */
        public SourceOrderIp: string;

        /**
         * Creates a new FillReportMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FillReportMsg instance
         */
        public static create(properties?: PropTradingProtocol.IFillReportMsg): PropTradingProtocol.FillReportMsg;

        /**
         * Encodes the specified FillReportMsg message. Does not implicitly {@link PropTradingProtocol.FillReportMsg.verify|verify} messages.
         * @param message FillReportMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IFillReportMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FillReportMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.FillReportMsg.verify|verify} messages.
         * @param message FillReportMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IFillReportMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FillReportMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FillReportMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.FillReportMsg;

        /**
         * Decodes a FillReportMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FillReportMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.FillReportMsg;

        /**
         * Verifies a FillReportMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FillReportMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FillReportMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.FillReportMsg;

        /**
         * Creates a plain object from a FillReportMsg message. Also converts values to other types if specified.
         * @param message FillReportMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.FillReportMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FillReportMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FillReportMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TradeReportMsg. */
    interface ITradeReportMsg {

        /** TradeReportMsg AccountId */
        AccountId?: (number|Long|null);

        /** TradeReportMsg TradeId */
        TradeId?: (number|Long|null);

        /** TradeReportMsg ContractId */
        ContractId?: (number|Long|null);

        /** TradeReportMsg FeedSymbol */
        FeedSymbol?: (string|null);

        /** TradeReportMsg Quantity */
        Quantity?: (number|null);

        /** TradeReportMsg EntryUtc */
        EntryUtc?: (number|Long|null);

        /** TradeReportMsg ExitUtc */
        ExitUtc?: (number|Long|null);

        /** TradeReportMsg OpenPrice */
        OpenPrice?: (number|null);

        /** TradeReportMsg ClosePrice */
        ClosePrice?: (number|null);

        /** TradeReportMsg GrossPL */
        GrossPL?: (number|null);

        /** TradeReportMsg Commissions */
        Commissions?: (number|null);

        /** TradeReportMsg Unaccounted */
        Unaccounted?: (boolean|null);

        /** TradeReportMsg Flags */
        Flags?: (PropTradingProtocol.TradeReportMsg.Flag[]|null);
    }

    /** Represents a TradeReportMsg. */
    class TradeReportMsg implements ITradeReportMsg {

        /**
         * Constructs a new TradeReportMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ITradeReportMsg);

        /** TradeReportMsg AccountId. */
        public AccountId: (number|Long);

        /** TradeReportMsg TradeId. */
        public TradeId: (number|Long);

        /** TradeReportMsg ContractId. */
        public ContractId: (number|Long);

        /** TradeReportMsg FeedSymbol. */
        public FeedSymbol: string;

        /** TradeReportMsg Quantity. */
        public Quantity: number;

        /** TradeReportMsg EntryUtc. */
        public EntryUtc: (number|Long);

        /** TradeReportMsg ExitUtc. */
        public ExitUtc: (number|Long);

        /** TradeReportMsg OpenPrice. */
        public OpenPrice: number;

        /** TradeReportMsg ClosePrice. */
        public ClosePrice: number;

        /** TradeReportMsg GrossPL. */
        public GrossPL: number;

        /** TradeReportMsg Commissions. */
        public Commissions: number;

        /** TradeReportMsg Unaccounted. */
        public Unaccounted: boolean;

        /** TradeReportMsg Flags. */
        public Flags: PropTradingProtocol.TradeReportMsg.Flag[];

        /**
         * Creates a new TradeReportMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TradeReportMsg instance
         */
        public static create(properties?: PropTradingProtocol.ITradeReportMsg): PropTradingProtocol.TradeReportMsg;

        /**
         * Encodes the specified TradeReportMsg message. Does not implicitly {@link PropTradingProtocol.TradeReportMsg.verify|verify} messages.
         * @param message TradeReportMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ITradeReportMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TradeReportMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.TradeReportMsg.verify|verify} messages.
         * @param message TradeReportMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ITradeReportMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TradeReportMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TradeReportMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.TradeReportMsg;

        /**
         * Decodes a TradeReportMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TradeReportMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.TradeReportMsg;

        /**
         * Verifies a TradeReportMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TradeReportMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TradeReportMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.TradeReportMsg;

        /**
         * Creates a plain object from a TradeReportMsg message. Also converts values to other types if specified.
         * @param message TradeReportMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.TradeReportMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TradeReportMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TradeReportMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace TradeReportMsg {

        /** Flag enum. */
        enum Flag {
            SCALP = 1,
            CLOSED_TOO_CLOSE_TO_ENTRY = 2,
            TRADING_NEWS = 4
        }
    }

    /** Properties of a FillTradeReportMsg. */
    interface IFillTradeReportMsg {

        /** FillTradeReportMsg FillType */
        FillType?: (PropTradingProtocol.FillTradeReportMsg.FillTradeTypeEnum|null);

        /** FillTradeReportMsg AccountId */
        AccountId?: (number|Long|null);

        /** FillTradeReportMsg PositionId */
        PositionId?: (number|Long|null);

        /** FillTradeReportMsg OrderId */
        OrderId?: (number|Long|null);

        /** FillTradeReportMsg ContractId */
        ContractId?: (number|Long|null);

        /** FillTradeReportMsg FeedSymbol */
        FeedSymbol?: (string|null);

        /** FillTradeReportMsg Quantity */
        Quantity?: (number|null);

        /** FillTradeReportMsg EntryUtc */
        EntryUtc?: (number|Long|null);

        /** FillTradeReportMsg ExitUtc */
        ExitUtc?: (number|Long|null);

        /** FillTradeReportMsg OpenPrice */
        OpenPrice?: (number|null);

        /** FillTradeReportMsg ClosePrice */
        ClosePrice?: (number|null);

        /** FillTradeReportMsg ConvertedGrossPL */
        ConvertedGrossPL?: (number|null);

        /** FillTradeReportMsg ConvertedCommissions */
        ConvertedCommissions?: (number|null);
    }

    /** Represents a FillTradeReportMsg. */
    class FillTradeReportMsg implements IFillTradeReportMsg {

        /**
         * Constructs a new FillTradeReportMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IFillTradeReportMsg);

        /** FillTradeReportMsg FillType. */
        public FillType: PropTradingProtocol.FillTradeReportMsg.FillTradeTypeEnum;

        /** FillTradeReportMsg AccountId. */
        public AccountId: (number|Long);

        /** FillTradeReportMsg PositionId. */
        public PositionId: (number|Long);

        /** FillTradeReportMsg OrderId. */
        public OrderId: (number|Long);

        /** FillTradeReportMsg ContractId. */
        public ContractId: (number|Long);

        /** FillTradeReportMsg FeedSymbol. */
        public FeedSymbol: string;

        /** FillTradeReportMsg Quantity. */
        public Quantity: number;

        /** FillTradeReportMsg EntryUtc. */
        public EntryUtc: (number|Long);

        /** FillTradeReportMsg ExitUtc. */
        public ExitUtc: (number|Long);

        /** FillTradeReportMsg OpenPrice. */
        public OpenPrice: number;

        /** FillTradeReportMsg ClosePrice. */
        public ClosePrice: number;

        /** FillTradeReportMsg ConvertedGrossPL. */
        public ConvertedGrossPL: number;

        /** FillTradeReportMsg ConvertedCommissions. */
        public ConvertedCommissions: number;

        /**
         * Creates a new FillTradeReportMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FillTradeReportMsg instance
         */
        public static create(properties?: PropTradingProtocol.IFillTradeReportMsg): PropTradingProtocol.FillTradeReportMsg;

        /**
         * Encodes the specified FillTradeReportMsg message. Does not implicitly {@link PropTradingProtocol.FillTradeReportMsg.verify|verify} messages.
         * @param message FillTradeReportMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IFillTradeReportMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FillTradeReportMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.FillTradeReportMsg.verify|verify} messages.
         * @param message FillTradeReportMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IFillTradeReportMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FillTradeReportMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FillTradeReportMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.FillTradeReportMsg;

        /**
         * Decodes a FillTradeReportMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FillTradeReportMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.FillTradeReportMsg;

        /**
         * Verifies a FillTradeReportMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FillTradeReportMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FillTradeReportMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.FillTradeReportMsg;

        /**
         * Creates a plain object from a FillTradeReportMsg message. Also converts values to other types if specified.
         * @param message FillTradeReportMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.FillTradeReportMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FillTradeReportMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FillTradeReportMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FillTradeReportMsg {

        /** FillTradeTypeEnum enum. */
        enum FillTradeTypeEnum {
            OPEN = 0,
            CLOSE = 1
        }
    }

    /** Properties of a UserSessionLogMsg. */
    interface IUserSessionLogMsg {

        /** UserSessionLogMsg SessionId */
        SessionId?: (string|null);

        /** UserSessionLogMsg UserId */
        UserId?: (string|null);

        /** UserSessionLogMsg StartUtc */
        StartUtc?: (number|Long|null);

        /** UserSessionLogMsg EndUtc */
        EndUtc?: (number|Long|null);

        /** UserSessionLogMsg Ip */
        Ip?: (string|null);

        /** UserSessionLogMsg Source */
        Source?: (string|null);

        /** UserSessionLogMsg ClientSessionId */
        ClientSessionId?: (number|Long|null);
    }

    /** Represents a UserSessionLogMsg. */
    class UserSessionLogMsg implements IUserSessionLogMsg {

        /**
         * Constructs a new UserSessionLogMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IUserSessionLogMsg);

        /** UserSessionLogMsg SessionId. */
        public SessionId: string;

        /** UserSessionLogMsg UserId. */
        public UserId: string;

        /** UserSessionLogMsg StartUtc. */
        public StartUtc: (number|Long);

        /** UserSessionLogMsg EndUtc. */
        public EndUtc: (number|Long);

        /** UserSessionLogMsg Ip. */
        public Ip: string;

        /** UserSessionLogMsg Source. */
        public Source: string;

        /** UserSessionLogMsg ClientSessionId. */
        public ClientSessionId: (number|Long);

        /**
         * Creates a new UserSessionLogMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserSessionLogMsg instance
         */
        public static create(properties?: PropTradingProtocol.IUserSessionLogMsg): PropTradingProtocol.UserSessionLogMsg;

        /**
         * Encodes the specified UserSessionLogMsg message. Does not implicitly {@link PropTradingProtocol.UserSessionLogMsg.verify|verify} messages.
         * @param message UserSessionLogMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IUserSessionLogMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserSessionLogMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.UserSessionLogMsg.verify|verify} messages.
         * @param message UserSessionLogMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IUserSessionLogMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserSessionLogMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSessionLogMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.UserSessionLogMsg;

        /**
         * Decodes a UserSessionLogMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserSessionLogMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.UserSessionLogMsg;

        /**
         * Verifies a UserSessionLogMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserSessionLogMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSessionLogMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.UserSessionLogMsg;

        /**
         * Creates a plain object from a UserSessionLogMsg message. Also converts values to other types if specified.
         * @param message UserSessionLogMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.UserSessionLogMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSessionLogMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserSessionLogMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** SubscribeModeEnum enum. */
    enum SubscribeModeEnum {
        SNAPSHOT = 0,
        SUBSCRIBE = 1,
        UNSUBSCRIBE = 2
    }

    /** Properties of a CurrencyRatesReqMsg. */
    interface ICurrencyRatesReqMsg {

        /** CurrencyRatesReqMsg Mode */
        Mode?: (PropTradingProtocol.SubscribeModeEnum|null);
    }

    /** Represents a CurrencyRatesReqMsg. */
    class CurrencyRatesReqMsg implements ICurrencyRatesReqMsg {

        /**
         * Constructs a new CurrencyRatesReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ICurrencyRatesReqMsg);

        /** CurrencyRatesReqMsg Mode. */
        public Mode: PropTradingProtocol.SubscribeModeEnum;

        /**
         * Creates a new CurrencyRatesReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CurrencyRatesReqMsg instance
         */
        public static create(properties?: PropTradingProtocol.ICurrencyRatesReqMsg): PropTradingProtocol.CurrencyRatesReqMsg;

        /**
         * Encodes the specified CurrencyRatesReqMsg message. Does not implicitly {@link PropTradingProtocol.CurrencyRatesReqMsg.verify|verify} messages.
         * @param message CurrencyRatesReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ICurrencyRatesReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CurrencyRatesReqMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.CurrencyRatesReqMsg.verify|verify} messages.
         * @param message CurrencyRatesReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ICurrencyRatesReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CurrencyRatesReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CurrencyRatesReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.CurrencyRatesReqMsg;

        /**
         * Decodes a CurrencyRatesReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CurrencyRatesReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.CurrencyRatesReqMsg;

        /**
         * Verifies a CurrencyRatesReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CurrencyRatesReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CurrencyRatesReqMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.CurrencyRatesReqMsg;

        /**
         * Creates a plain object from a CurrencyRatesReqMsg message. Also converts values to other types if specified.
         * @param message CurrencyRatesReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.CurrencyRatesReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CurrencyRatesReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CurrencyRatesReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CurrencyRateInfoMsg. */
    interface ICurrencyRateInfoMsg {

        /** CurrencyRateInfoMsg BaseCurrency */
        BaseCurrency?: (string|null);

        /** CurrencyRateInfoMsg QuoteCurrency */
        QuoteCurrency?: (string|null);

        /** CurrencyRateInfoMsg Rate */
        Rate?: (number|null);
    }

    /** Represents a CurrencyRateInfoMsg. */
    class CurrencyRateInfoMsg implements ICurrencyRateInfoMsg {

        /**
         * Constructs a new CurrencyRateInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ICurrencyRateInfoMsg);

        /** CurrencyRateInfoMsg BaseCurrency. */
        public BaseCurrency: string;

        /** CurrencyRateInfoMsg QuoteCurrency. */
        public QuoteCurrency: string;

        /** CurrencyRateInfoMsg Rate. */
        public Rate: number;

        /**
         * Creates a new CurrencyRateInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CurrencyRateInfoMsg instance
         */
        public static create(properties?: PropTradingProtocol.ICurrencyRateInfoMsg): PropTradingProtocol.CurrencyRateInfoMsg;

        /**
         * Encodes the specified CurrencyRateInfoMsg message. Does not implicitly {@link PropTradingProtocol.CurrencyRateInfoMsg.verify|verify} messages.
         * @param message CurrencyRateInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ICurrencyRateInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CurrencyRateInfoMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.CurrencyRateInfoMsg.verify|verify} messages.
         * @param message CurrencyRateInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ICurrencyRateInfoMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CurrencyRateInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CurrencyRateInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.CurrencyRateInfoMsg;

        /**
         * Decodes a CurrencyRateInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CurrencyRateInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.CurrencyRateInfoMsg;

        /**
         * Verifies a CurrencyRateInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CurrencyRateInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CurrencyRateInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.CurrencyRateInfoMsg;

        /**
         * Creates a plain object from a CurrencyRateInfoMsg message. Also converts values to other types if specified.
         * @param message CurrencyRateInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.CurrencyRateInfoMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CurrencyRateInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CurrencyRateInfoMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** LoginReasonsCodeEnum enum. */
    enum LoginReasonsCodeEnum {
        CREDENTIALS = 0,
        CONCURRENT_SESSION = 1,
        UNEXPECTED_ERROR = 2
    }

    /** RiskUserLossModeEnum enum. */
    enum RiskUserLossModeEnum {
        TrailingMaxBalance = 0,
        StaticStartBalance = 1,
        TrailingMaxEquity = 2,
        StaticStartEquity = 3,
        StaticMininmumStartEquityBalance = 4
    }

    /** RiskUserTargetModeEnum enum. */
    enum RiskUserTargetModeEnum {
        Balance = 0,
        Equity = 1
    }

    /** Properties of an AccountUserRiskRule. */
    interface IAccountUserRiskRule {

        /** AccountUserRiskRule AccountId */
        AccountId?: (number|Long|null);

        /** AccountUserRiskRule IsScheduled */
        IsScheduled?: (boolean|null);

        /** AccountUserRiskRule SetAsDefaultForAccountTradingRule */
        SetAsDefaultForAccountTradingRule?: (boolean|null);

        /** AccountUserRiskRule InhibitChangesUntilNextSession */
        InhibitChangesUntilNextSession?: (boolean|null);

        /** AccountUserRiskRule DailyLossLimitEnabled */
        DailyLossLimitEnabled?: (boolean|null);

        /** AccountUserRiskRule DailyLossLimitMode */
        DailyLossLimitMode?: (PropTradingProtocol.RiskUserLossModeEnum|null);

        /** AccountUserRiskRule DailyLossLimitValue */
        DailyLossLimitValue?: (number|null);

        /** AccountUserRiskRule DailyLossLimitPercentage */
        DailyLossLimitPercentage?: (number|null);

        /** AccountUserRiskRule DailyProfitLimitEnabled */
        DailyProfitLimitEnabled?: (boolean|null);

        /** AccountUserRiskRule DailyProfitLimitMode */
        DailyProfitLimitMode?: (PropTradingProtocol.RiskUserTargetModeEnum|null);

        /** AccountUserRiskRule DailyProfitLimitValue */
        DailyProfitLimitValue?: (number|null);

        /** AccountUserRiskRule DailyProfitLimitPercentage */
        DailyProfitLimitPercentage?: (number|null);

        /** AccountUserRiskRule WeeklyLossLimitEnabled */
        WeeklyLossLimitEnabled?: (boolean|null);

        /** AccountUserRiskRule WeeklyLossLimitMode */
        WeeklyLossLimitMode?: (PropTradingProtocol.RiskUserLossModeEnum|null);

        /** AccountUserRiskRule WeeklyLossLimitValue */
        WeeklyLossLimitValue?: (number|null);

        /** AccountUserRiskRule WeeklyLossLimitPercentage */
        WeeklyLossLimitPercentage?: (number|null);

        /** AccountUserRiskRule WeeklyProfitLimitEnabled */
        WeeklyProfitLimitEnabled?: (boolean|null);

        /** AccountUserRiskRule WeeklyProfitLimitMode */
        WeeklyProfitLimitMode?: (PropTradingProtocol.RiskUserTargetModeEnum|null);

        /** AccountUserRiskRule WeeklyProfitLimitValue */
        WeeklyProfitLimitValue?: (number|null);

        /** AccountUserRiskRule WeeklyProfitLimitPercentage */
        WeeklyProfitLimitPercentage?: (number|null);
    }

    /** Represents an AccountUserRiskRule. */
    class AccountUserRiskRule implements IAccountUserRiskRule {

        /**
         * Constructs a new AccountUserRiskRule.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountUserRiskRule);

        /** AccountUserRiskRule AccountId. */
        public AccountId: (number|Long);

        /** AccountUserRiskRule IsScheduled. */
        public IsScheduled: boolean;

        /** AccountUserRiskRule SetAsDefaultForAccountTradingRule. */
        public SetAsDefaultForAccountTradingRule: boolean;

        /** AccountUserRiskRule InhibitChangesUntilNextSession. */
        public InhibitChangesUntilNextSession: boolean;

        /** AccountUserRiskRule DailyLossLimitEnabled. */
        public DailyLossLimitEnabled: boolean;

        /** AccountUserRiskRule DailyLossLimitMode. */
        public DailyLossLimitMode: PropTradingProtocol.RiskUserLossModeEnum;

        /** AccountUserRiskRule DailyLossLimitValue. */
        public DailyLossLimitValue: number;

        /** AccountUserRiskRule DailyLossLimitPercentage. */
        public DailyLossLimitPercentage: number;

        /** AccountUserRiskRule DailyProfitLimitEnabled. */
        public DailyProfitLimitEnabled: boolean;

        /** AccountUserRiskRule DailyProfitLimitMode. */
        public DailyProfitLimitMode: PropTradingProtocol.RiskUserTargetModeEnum;

        /** AccountUserRiskRule DailyProfitLimitValue. */
        public DailyProfitLimitValue: number;

        /** AccountUserRiskRule DailyProfitLimitPercentage. */
        public DailyProfitLimitPercentage: number;

        /** AccountUserRiskRule WeeklyLossLimitEnabled. */
        public WeeklyLossLimitEnabled: boolean;

        /** AccountUserRiskRule WeeklyLossLimitMode. */
        public WeeklyLossLimitMode: PropTradingProtocol.RiskUserLossModeEnum;

        /** AccountUserRiskRule WeeklyLossLimitValue. */
        public WeeklyLossLimitValue: number;

        /** AccountUserRiskRule WeeklyLossLimitPercentage. */
        public WeeklyLossLimitPercentage: number;

        /** AccountUserRiskRule WeeklyProfitLimitEnabled. */
        public WeeklyProfitLimitEnabled: boolean;

        /** AccountUserRiskRule WeeklyProfitLimitMode. */
        public WeeklyProfitLimitMode: PropTradingProtocol.RiskUserTargetModeEnum;

        /** AccountUserRiskRule WeeklyProfitLimitValue. */
        public WeeklyProfitLimitValue: number;

        /** AccountUserRiskRule WeeklyProfitLimitPercentage. */
        public WeeklyProfitLimitPercentage: number;

        /**
         * Creates a new AccountUserRiskRule instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountUserRiskRule instance
         */
        public static create(properties?: PropTradingProtocol.IAccountUserRiskRule): PropTradingProtocol.AccountUserRiskRule;

        /**
         * Encodes the specified AccountUserRiskRule message. Does not implicitly {@link PropTradingProtocol.AccountUserRiskRule.verify|verify} messages.
         * @param message AccountUserRiskRule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountUserRiskRule, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountUserRiskRule message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountUserRiskRule.verify|verify} messages.
         * @param message AccountUserRiskRule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountUserRiskRule, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountUserRiskRule message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountUserRiskRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountUserRiskRule;

        /**
         * Decodes an AccountUserRiskRule message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountUserRiskRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountUserRiskRule;

        /**
         * Verifies an AccountUserRiskRule message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountUserRiskRule message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountUserRiskRule
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountUserRiskRule;

        /**
         * Creates a plain object from an AccountUserRiskRule message. Also converts values to other types if specified.
         * @param message AccountUserRiskRule
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountUserRiskRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountUserRiskRule to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountUserRiskRule
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountUserRiskRuleInfoReqMsg. */
    interface IAccountUserRiskRuleInfoReqMsg {

        /** AccountUserRiskRuleInfoReqMsg RequestId */
        RequestId?: (number|Long|null);

        /** AccountUserRiskRuleInfoReqMsg AccountId */
        AccountId?: (number|Long|null);
    }

    /** Represents an AccountUserRiskRuleInfoReqMsg. */
    class AccountUserRiskRuleInfoReqMsg implements IAccountUserRiskRuleInfoReqMsg {

        /**
         * Constructs a new AccountUserRiskRuleInfoReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountUserRiskRuleInfoReqMsg);

        /** AccountUserRiskRuleInfoReqMsg RequestId. */
        public RequestId: (number|Long);

        /** AccountUserRiskRuleInfoReqMsg AccountId. */
        public AccountId: (number|Long);

        /**
         * Creates a new AccountUserRiskRuleInfoReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountUserRiskRuleInfoReqMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountUserRiskRuleInfoReqMsg): PropTradingProtocol.AccountUserRiskRuleInfoReqMsg;

        /**
         * Encodes the specified AccountUserRiskRuleInfoReqMsg message. Does not implicitly {@link PropTradingProtocol.AccountUserRiskRuleInfoReqMsg.verify|verify} messages.
         * @param message AccountUserRiskRuleInfoReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountUserRiskRuleInfoReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountUserRiskRuleInfoReqMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountUserRiskRuleInfoReqMsg.verify|verify} messages.
         * @param message AccountUserRiskRuleInfoReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountUserRiskRuleInfoReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountUserRiskRuleInfoReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountUserRiskRuleInfoReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountUserRiskRuleInfoReqMsg;

        /**
         * Decodes an AccountUserRiskRuleInfoReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountUserRiskRuleInfoReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountUserRiskRuleInfoReqMsg;

        /**
         * Verifies an AccountUserRiskRuleInfoReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountUserRiskRuleInfoReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountUserRiskRuleInfoReqMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountUserRiskRuleInfoReqMsg;

        /**
         * Creates a plain object from an AccountUserRiskRuleInfoReqMsg message. Also converts values to other types if specified.
         * @param message AccountUserRiskRuleInfoReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountUserRiskRuleInfoReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountUserRiskRuleInfoReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountUserRiskRuleInfoReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountUserRiskRuleInfoRespMsg. */
    interface IAccountUserRiskRuleInfoRespMsg {

        /** AccountUserRiskRuleInfoRespMsg RequestId */
        RequestId?: (number|Long|null);

        /** AccountUserRiskRuleInfoRespMsg Success */
        Success?: (boolean|null);

        /** AccountUserRiskRuleInfoRespMsg Error */
        Error?: (string|null);

        /** AccountUserRiskRuleInfoRespMsg Rule */
        Rule?: (PropTradingProtocol.IAccountUserRiskRule|null);
    }

    /** Represents an AccountUserRiskRuleInfoRespMsg. */
    class AccountUserRiskRuleInfoRespMsg implements IAccountUserRiskRuleInfoRespMsg {

        /**
         * Constructs a new AccountUserRiskRuleInfoRespMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountUserRiskRuleInfoRespMsg);

        /** AccountUserRiskRuleInfoRespMsg RequestId. */
        public RequestId: (number|Long);

        /** AccountUserRiskRuleInfoRespMsg Success. */
        public Success: boolean;

        /** AccountUserRiskRuleInfoRespMsg Error. */
        public Error: string;

        /** AccountUserRiskRuleInfoRespMsg Rule. */
        public Rule?: (PropTradingProtocol.IAccountUserRiskRule|null);

        /**
         * Creates a new AccountUserRiskRuleInfoRespMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountUserRiskRuleInfoRespMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountUserRiskRuleInfoRespMsg): PropTradingProtocol.AccountUserRiskRuleInfoRespMsg;

        /**
         * Encodes the specified AccountUserRiskRuleInfoRespMsg message. Does not implicitly {@link PropTradingProtocol.AccountUserRiskRuleInfoRespMsg.verify|verify} messages.
         * @param message AccountUserRiskRuleInfoRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountUserRiskRuleInfoRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountUserRiskRuleInfoRespMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountUserRiskRuleInfoRespMsg.verify|verify} messages.
         * @param message AccountUserRiskRuleInfoRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountUserRiskRuleInfoRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountUserRiskRuleInfoRespMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountUserRiskRuleInfoRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountUserRiskRuleInfoRespMsg;

        /**
         * Decodes an AccountUserRiskRuleInfoRespMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountUserRiskRuleInfoRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountUserRiskRuleInfoRespMsg;

        /**
         * Verifies an AccountUserRiskRuleInfoRespMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountUserRiskRuleInfoRespMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountUserRiskRuleInfoRespMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountUserRiskRuleInfoRespMsg;

        /**
         * Creates a plain object from an AccountUserRiskRuleInfoRespMsg message. Also converts values to other types if specified.
         * @param message AccountUserRiskRuleInfoRespMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountUserRiskRuleInfoRespMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountUserRiskRuleInfoRespMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountUserRiskRuleInfoRespMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountUserRiskRuleSetReqMsg. */
    interface IAccountUserRiskRuleSetReqMsg {

        /** AccountUserRiskRuleSetReqMsg RequestId */
        RequestId?: (number|Long|null);

        /** AccountUserRiskRuleSetReqMsg Rule */
        Rule?: (PropTradingProtocol.IAccountUserRiskRule|null);
    }

    /** Represents an AccountUserRiskRuleSetReqMsg. */
    class AccountUserRiskRuleSetReqMsg implements IAccountUserRiskRuleSetReqMsg {

        /**
         * Constructs a new AccountUserRiskRuleSetReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountUserRiskRuleSetReqMsg);

        /** AccountUserRiskRuleSetReqMsg RequestId. */
        public RequestId: (number|Long);

        /** AccountUserRiskRuleSetReqMsg Rule. */
        public Rule?: (PropTradingProtocol.IAccountUserRiskRule|null);

        /**
         * Creates a new AccountUserRiskRuleSetReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountUserRiskRuleSetReqMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountUserRiskRuleSetReqMsg): PropTradingProtocol.AccountUserRiskRuleSetReqMsg;

        /**
         * Encodes the specified AccountUserRiskRuleSetReqMsg message. Does not implicitly {@link PropTradingProtocol.AccountUserRiskRuleSetReqMsg.verify|verify} messages.
         * @param message AccountUserRiskRuleSetReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountUserRiskRuleSetReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountUserRiskRuleSetReqMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountUserRiskRuleSetReqMsg.verify|verify} messages.
         * @param message AccountUserRiskRuleSetReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountUserRiskRuleSetReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountUserRiskRuleSetReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountUserRiskRuleSetReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountUserRiskRuleSetReqMsg;

        /**
         * Decodes an AccountUserRiskRuleSetReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountUserRiskRuleSetReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountUserRiskRuleSetReqMsg;

        /**
         * Verifies an AccountUserRiskRuleSetReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountUserRiskRuleSetReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountUserRiskRuleSetReqMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountUserRiskRuleSetReqMsg;

        /**
         * Creates a plain object from an AccountUserRiskRuleSetReqMsg message. Also converts values to other types if specified.
         * @param message AccountUserRiskRuleSetReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountUserRiskRuleSetReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountUserRiskRuleSetReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountUserRiskRuleSetReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountUserRiskRuleSetRespMsg. */
    interface IAccountUserRiskRuleSetRespMsg {

        /** AccountUserRiskRuleSetRespMsg RequestId */
        RequestId?: (number|Long|null);

        /** AccountUserRiskRuleSetRespMsg Success */
        Success?: (boolean|null);

        /** AccountUserRiskRuleSetRespMsg Errors */
        Errors?: (string[]|null);
    }

    /** Represents an AccountUserRiskRuleSetRespMsg. */
    class AccountUserRiskRuleSetRespMsg implements IAccountUserRiskRuleSetRespMsg {

        /**
         * Constructs a new AccountUserRiskRuleSetRespMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountUserRiskRuleSetRespMsg);

        /** AccountUserRiskRuleSetRespMsg RequestId. */
        public RequestId: (number|Long);

        /** AccountUserRiskRuleSetRespMsg Success. */
        public Success: boolean;

        /** AccountUserRiskRuleSetRespMsg Errors. */
        public Errors: string[];

        /**
         * Creates a new AccountUserRiskRuleSetRespMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountUserRiskRuleSetRespMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountUserRiskRuleSetRespMsg): PropTradingProtocol.AccountUserRiskRuleSetRespMsg;

        /**
         * Encodes the specified AccountUserRiskRuleSetRespMsg message. Does not implicitly {@link PropTradingProtocol.AccountUserRiskRuleSetRespMsg.verify|verify} messages.
         * @param message AccountUserRiskRuleSetRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountUserRiskRuleSetRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountUserRiskRuleSetRespMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountUserRiskRuleSetRespMsg.verify|verify} messages.
         * @param message AccountUserRiskRuleSetRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountUserRiskRuleSetRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountUserRiskRuleSetRespMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountUserRiskRuleSetRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountUserRiskRuleSetRespMsg;

        /**
         * Decodes an AccountUserRiskRuleSetRespMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountUserRiskRuleSetRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountUserRiskRuleSetRespMsg;

        /**
         * Verifies an AccountUserRiskRuleSetRespMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountUserRiskRuleSetRespMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountUserRiskRuleSetRespMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountUserRiskRuleSetRespMsg;

        /**
         * Creates a plain object from an AccountUserRiskRuleSetRespMsg message. Also converts values to other types if specified.
         * @param message AccountUserRiskRuleSetRespMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountUserRiskRuleSetRespMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountUserRiskRuleSetRespMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountUserRiskRuleSetRespMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountDailyLockoutReqMsg. */
    interface IAccountDailyLockoutReqMsg {

        /** AccountDailyLockoutReqMsg RequestId */
        RequestId?: (number|Long|null);

        /** AccountDailyLockoutReqMsg AccountId */
        AccountId?: (number|Long|null);
    }

    /** Represents an AccountDailyLockoutReqMsg. */
    class AccountDailyLockoutReqMsg implements IAccountDailyLockoutReqMsg {

        /**
         * Constructs a new AccountDailyLockoutReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountDailyLockoutReqMsg);

        /** AccountDailyLockoutReqMsg RequestId. */
        public RequestId: (number|Long);

        /** AccountDailyLockoutReqMsg AccountId. */
        public AccountId: (number|Long);

        /**
         * Creates a new AccountDailyLockoutReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountDailyLockoutReqMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountDailyLockoutReqMsg): PropTradingProtocol.AccountDailyLockoutReqMsg;

        /**
         * Encodes the specified AccountDailyLockoutReqMsg message. Does not implicitly {@link PropTradingProtocol.AccountDailyLockoutReqMsg.verify|verify} messages.
         * @param message AccountDailyLockoutReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountDailyLockoutReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountDailyLockoutReqMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountDailyLockoutReqMsg.verify|verify} messages.
         * @param message AccountDailyLockoutReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountDailyLockoutReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountDailyLockoutReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountDailyLockoutReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountDailyLockoutReqMsg;

        /**
         * Decodes an AccountDailyLockoutReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountDailyLockoutReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountDailyLockoutReqMsg;

        /**
         * Verifies an AccountDailyLockoutReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountDailyLockoutReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountDailyLockoutReqMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountDailyLockoutReqMsg;

        /**
         * Creates a plain object from an AccountDailyLockoutReqMsg message. Also converts values to other types if specified.
         * @param message AccountDailyLockoutReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountDailyLockoutReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountDailyLockoutReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountDailyLockoutReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountDailyLockoutRespMsg. */
    interface IAccountDailyLockoutRespMsg {

        /** AccountDailyLockoutRespMsg RequestId */
        RequestId?: (number|Long|null);

        /** AccountDailyLockoutRespMsg Success */
        Success?: (boolean|null);

        /** AccountDailyLockoutRespMsg Error */
        Error?: (string|null);
    }

    /** Represents an AccountDailyLockoutRespMsg. */
    class AccountDailyLockoutRespMsg implements IAccountDailyLockoutRespMsg {

        /**
         * Constructs a new AccountDailyLockoutRespMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountDailyLockoutRespMsg);

        /** AccountDailyLockoutRespMsg RequestId. */
        public RequestId: (number|Long);

        /** AccountDailyLockoutRespMsg Success. */
        public Success: boolean;

        /** AccountDailyLockoutRespMsg Error. */
        public Error: string;

        /**
         * Creates a new AccountDailyLockoutRespMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountDailyLockoutRespMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountDailyLockoutRespMsg): PropTradingProtocol.AccountDailyLockoutRespMsg;

        /**
         * Encodes the specified AccountDailyLockoutRespMsg message. Does not implicitly {@link PropTradingProtocol.AccountDailyLockoutRespMsg.verify|verify} messages.
         * @param message AccountDailyLockoutRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountDailyLockoutRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountDailyLockoutRespMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountDailyLockoutRespMsg.verify|verify} messages.
         * @param message AccountDailyLockoutRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountDailyLockoutRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountDailyLockoutRespMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountDailyLockoutRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountDailyLockoutRespMsg;

        /**
         * Decodes an AccountDailyLockoutRespMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountDailyLockoutRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountDailyLockoutRespMsg;

        /**
         * Verifies an AccountDailyLockoutRespMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountDailyLockoutRespMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountDailyLockoutRespMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountDailyLockoutRespMsg;

        /**
         * Creates a plain object from an AccountDailyLockoutRespMsg message. Also converts values to other types if specified.
         * @param message AccountDailyLockoutRespMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountDailyLockoutRespMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountDailyLockoutRespMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountDailyLockoutRespMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** AccountHistoricalEntityEnum enum. */
    enum AccountHistoricalEntityEnum {
        All = 0,
        Orders = 1,
        Trades = 2,
        Fills = 3,
        FillTrades = 4
    }

    /** Properties of an AccountHistoricalSessionReqMsg. */
    interface IAccountHistoricalSessionReqMsg {

        /** AccountHistoricalSessionReqMsg RequestId */
        RequestId?: (number|Long|null);

        /** AccountHistoricalSessionReqMsg AccountIds */
        AccountIds?: ((number|Long)[]|null);

        /** AccountHistoricalSessionReqMsg Entity */
        Entity?: (PropTradingProtocol.AccountHistoricalEntityEnum|null);
    }

    /** Represents an AccountHistoricalSessionReqMsg. */
    class AccountHistoricalSessionReqMsg implements IAccountHistoricalSessionReqMsg {

        /**
         * Constructs a new AccountHistoricalSessionReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountHistoricalSessionReqMsg);

        /** AccountHistoricalSessionReqMsg RequestId. */
        public RequestId: (number|Long);

        /** AccountHistoricalSessionReqMsg AccountIds. */
        public AccountIds: (number|Long)[];

        /** AccountHistoricalSessionReqMsg Entity. */
        public Entity: PropTradingProtocol.AccountHistoricalEntityEnum;

        /**
         * Creates a new AccountHistoricalSessionReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountHistoricalSessionReqMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountHistoricalSessionReqMsg): PropTradingProtocol.AccountHistoricalSessionReqMsg;

        /**
         * Encodes the specified AccountHistoricalSessionReqMsg message. Does not implicitly {@link PropTradingProtocol.AccountHistoricalSessionReqMsg.verify|verify} messages.
         * @param message AccountHistoricalSessionReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountHistoricalSessionReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountHistoricalSessionReqMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountHistoricalSessionReqMsg.verify|verify} messages.
         * @param message AccountHistoricalSessionReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountHistoricalSessionReqMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountHistoricalSessionReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountHistoricalSessionReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountHistoricalSessionReqMsg;

        /**
         * Decodes an AccountHistoricalSessionReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountHistoricalSessionReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountHistoricalSessionReqMsg;

        /**
         * Verifies an AccountHistoricalSessionReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountHistoricalSessionReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountHistoricalSessionReqMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountHistoricalSessionReqMsg;

        /**
         * Creates a plain object from an AccountHistoricalSessionReqMsg message. Also converts values to other types if specified.
         * @param message AccountHistoricalSessionReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountHistoricalSessionReqMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountHistoricalSessionReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountHistoricalSessionReqMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountHistoricalSessionRespMsg. */
    interface IAccountHistoricalSessionRespMsg {

        /** AccountHistoricalSessionRespMsg RequestId */
        RequestId?: (number|Long|null);

        /** AccountHistoricalSessionRespMsg Fills */
        Fills?: (PropTradingProtocol.IFillReportMsg[]|null);

        /** AccountHistoricalSessionRespMsg Trades */
        Trades?: (PropTradingProtocol.ITradeReportMsg[]|null);

        /** AccountHistoricalSessionRespMsg Orders */
        Orders?: (PropTradingProtocol.IOrderInfoMsg[]|null);

        /** AccountHistoricalSessionRespMsg FillTrades */
        FillTrades?: (PropTradingProtocol.IFillTradeReportMsg[]|null);

        /** AccountHistoricalSessionRespMsg IsPartial */
        IsPartial?: (boolean|null);
    }

    /** Represents an AccountHistoricalSessionRespMsg. */
    class AccountHistoricalSessionRespMsg implements IAccountHistoricalSessionRespMsg {

        /**
         * Constructs a new AccountHistoricalSessionRespMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IAccountHistoricalSessionRespMsg);

        /** AccountHistoricalSessionRespMsg RequestId. */
        public RequestId: (number|Long);

        /** AccountHistoricalSessionRespMsg Fills. */
        public Fills: PropTradingProtocol.IFillReportMsg[];

        /** AccountHistoricalSessionRespMsg Trades. */
        public Trades: PropTradingProtocol.ITradeReportMsg[];

        /** AccountHistoricalSessionRespMsg Orders. */
        public Orders: PropTradingProtocol.IOrderInfoMsg[];

        /** AccountHistoricalSessionRespMsg FillTrades. */
        public FillTrades: PropTradingProtocol.IFillTradeReportMsg[];

        /** AccountHistoricalSessionRespMsg IsPartial. */
        public IsPartial: boolean;

        /**
         * Creates a new AccountHistoricalSessionRespMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountHistoricalSessionRespMsg instance
         */
        public static create(properties?: PropTradingProtocol.IAccountHistoricalSessionRespMsg): PropTradingProtocol.AccountHistoricalSessionRespMsg;

        /**
         * Encodes the specified AccountHistoricalSessionRespMsg message. Does not implicitly {@link PropTradingProtocol.AccountHistoricalSessionRespMsg.verify|verify} messages.
         * @param message AccountHistoricalSessionRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IAccountHistoricalSessionRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountHistoricalSessionRespMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.AccountHistoricalSessionRespMsg.verify|verify} messages.
         * @param message AccountHistoricalSessionRespMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IAccountHistoricalSessionRespMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountHistoricalSessionRespMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountHistoricalSessionRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.AccountHistoricalSessionRespMsg;

        /**
         * Decodes an AccountHistoricalSessionRespMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountHistoricalSessionRespMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.AccountHistoricalSessionRespMsg;

        /**
         * Verifies an AccountHistoricalSessionRespMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountHistoricalSessionRespMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountHistoricalSessionRespMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.AccountHistoricalSessionRespMsg;

        /**
         * Creates a plain object from an AccountHistoricalSessionRespMsg message. Also converts values to other types if specified.
         * @param message AccountHistoricalSessionRespMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.AccountHistoricalSessionRespMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountHistoricalSessionRespMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountHistoricalSessionRespMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientRequestMsg. */
    interface IClientRequestMsg {

        /** ClientRequestMsg LoginReq */
        LoginReq?: (PropTradingProtocol.ILoginRequestMsg|null);

        /** ClientRequestMsg Ping */
        Ping?: (PropTradingProtocol.IPingMsg|null);

        /** ClientRequestMsg InfoReq */
        InfoReq?: (PropTradingProtocol.IInfoReqMsg|null);

        /** ClientRequestMsg ContractReq */
        ContractReq?: (PropTradingProtocol.IContractReqMsg|null);

        /** ClientRequestMsg DailyPls */
        DailyPls?: (PropTradingProtocol.IDailyPlReqMsg[]|null);

        /** ClientRequestMsg Order */
        Order?: (PropTradingProtocol.IOrderMsg[]|null);

        /** ClientRequestMsg LogMsg */
        LogMsg?: (PropTradingProtocol.ILogInfoMsg|null);

        /** ClientRequestMsg SymbolLookup */
        SymbolLookup?: (PropTradingProtocol.ISymbolLookupReqMsg|null);

        /** ClientRequestMsg CancelFlatReq */
        CancelFlatReq?: (PropTradingProtocol.ICancelFlatReqMsg|null);

        /** ClientRequestMsg AccountSubscribeReq */
        AccountSubscribeReq?: (PropTradingProtocol.IAccountSubscribeReqMsg|null);

        /** ClientRequestMsg CancelReverseReq */
        CancelReverseReq?: (PropTradingProtocol.ICancelReverseReqMsg|null);

        /** ClientRequestMsg CurrenyRatesReq */
        CurrenyRatesReq?: (PropTradingProtocol.ICurrencyRatesReqMsg|null);

        /** ClientRequestMsg AccountTradingSymbolInfoReq */
        AccountTradingSymbolInfoReq?: (PropTradingProtocol.IAccountTradingSymbolInfoReqMsg|null);

        /** ClientRequestMsg AccountUserRiskRuleInfoReq */
        AccountUserRiskRuleInfoReq?: (PropTradingProtocol.IAccountUserRiskRuleInfoReqMsg|null);

        /** ClientRequestMsg AccountUserRiskRuleSetReq */
        AccountUserRiskRuleSetReq?: (PropTradingProtocol.IAccountUserRiskRuleSetReqMsg|null);

        /** ClientRequestMsg AccountDailyLockoutReq */
        AccountDailyLockoutReq?: (PropTradingProtocol.IAccountDailyLockoutReqMsg|null);

        /** ClientRequestMsg AccountHistoricalSessionReq */
        AccountHistoricalSessionReq?: (PropTradingProtocol.IAccountHistoricalSessionReqMsg|null);

        /** ClientRequestMsg ContractsReqs */
        ContractsReqs?: (PropTradingProtocol.IContractRequestWrapperMsg|null);

        /** ClientRequestMsg AccountTradingSymbolMultiReq */
        AccountTradingSymbolMultiReq?: (PropTradingProtocol.IAccountTradingSymbolMultiReqMsg|null);
    }

    /** Represents a ClientRequestMsg. */
    class ClientRequestMsg implements IClientRequestMsg {

        /**
         * Constructs a new ClientRequestMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IClientRequestMsg);

        /** ClientRequestMsg LoginReq. */
        public LoginReq?: (PropTradingProtocol.ILoginRequestMsg|null);

        /** ClientRequestMsg Ping. */
        public Ping?: (PropTradingProtocol.IPingMsg|null);

        /** ClientRequestMsg InfoReq. */
        public InfoReq?: (PropTradingProtocol.IInfoReqMsg|null);

        /** ClientRequestMsg ContractReq. */
        public ContractReq?: (PropTradingProtocol.IContractReqMsg|null);

        /** ClientRequestMsg DailyPls. */
        public DailyPls: PropTradingProtocol.IDailyPlReqMsg[];

        /** ClientRequestMsg Order. */
        public Order: PropTradingProtocol.IOrderMsg[];

        /** ClientRequestMsg LogMsg. */
        public LogMsg?: (PropTradingProtocol.ILogInfoMsg|null);

        /** ClientRequestMsg SymbolLookup. */
        public SymbolLookup?: (PropTradingProtocol.ISymbolLookupReqMsg|null);

        /** ClientRequestMsg CancelFlatReq. */
        public CancelFlatReq?: (PropTradingProtocol.ICancelFlatReqMsg|null);

        /** ClientRequestMsg AccountSubscribeReq. */
        public AccountSubscribeReq?: (PropTradingProtocol.IAccountSubscribeReqMsg|null);

        /** ClientRequestMsg CancelReverseReq. */
        public CancelReverseReq?: (PropTradingProtocol.ICancelReverseReqMsg|null);

        /** ClientRequestMsg CurrenyRatesReq. */
        public CurrenyRatesReq?: (PropTradingProtocol.ICurrencyRatesReqMsg|null);

        /** ClientRequestMsg AccountTradingSymbolInfoReq. */
        public AccountTradingSymbolInfoReq?: (PropTradingProtocol.IAccountTradingSymbolInfoReqMsg|null);

        /** ClientRequestMsg AccountUserRiskRuleInfoReq. */
        public AccountUserRiskRuleInfoReq?: (PropTradingProtocol.IAccountUserRiskRuleInfoReqMsg|null);

        /** ClientRequestMsg AccountUserRiskRuleSetReq. */
        public AccountUserRiskRuleSetReq?: (PropTradingProtocol.IAccountUserRiskRuleSetReqMsg|null);

        /** ClientRequestMsg AccountDailyLockoutReq. */
        public AccountDailyLockoutReq?: (PropTradingProtocol.IAccountDailyLockoutReqMsg|null);

        /** ClientRequestMsg AccountHistoricalSessionReq. */
        public AccountHistoricalSessionReq?: (PropTradingProtocol.IAccountHistoricalSessionReqMsg|null);

        /** ClientRequestMsg ContractsReqs. */
        public ContractsReqs?: (PropTradingProtocol.IContractRequestWrapperMsg|null);

        /** ClientRequestMsg AccountTradingSymbolMultiReq. */
        public AccountTradingSymbolMultiReq?: (PropTradingProtocol.IAccountTradingSymbolMultiReqMsg|null);

        /**
         * Creates a new ClientRequestMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientRequestMsg instance
         */
        public static create(properties?: PropTradingProtocol.IClientRequestMsg): PropTradingProtocol.ClientRequestMsg;

        /**
         * Encodes the specified ClientRequestMsg message. Does not implicitly {@link PropTradingProtocol.ClientRequestMsg.verify|verify} messages.
         * @param message ClientRequestMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IClientRequestMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientRequestMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.ClientRequestMsg.verify|verify} messages.
         * @param message ClientRequestMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IClientRequestMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientRequestMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientRequestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.ClientRequestMsg;

        /**
         * Decodes a ClientRequestMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientRequestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.ClientRequestMsg;

        /**
         * Verifies a ClientRequestMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientRequestMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientRequestMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.ClientRequestMsg;

        /**
         * Creates a plain object from a ClientRequestMsg message. Also converts values to other types if specified.
         * @param message ClientRequestMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.ClientRequestMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientRequestMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientRequestMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerResponseMsg. */
    interface IServerResponseMsg {

        /** ServerResponseMsg LoginMsg */
        LoginMsg?: (PropTradingProtocol.ILoginResponseMsg|null);

        /** ServerResponseMsg Pong */
        Pong?: (PropTradingProtocol.IPongMsg|null);

        /** ServerResponseMsg InfoMsg */
        InfoMsg?: (PropTradingProtocol.IInfoRespMsg|null);

        /** ServerResponseMsg BalanceInfo */
        BalanceInfo?: (PropTradingProtocol.IBalanceMsg[]|null);

        /** ServerResponseMsg ContractMsg */
        ContractMsg?: (PropTradingProtocol.IContractRespMsg|null);

        /** ServerResponseMsg DailyPls */
        DailyPls?: (PropTradingProtocol.IDailyPlRespMsg[]|null);

        /** ServerResponseMsg OrderInfo */
        OrderInfo?: (PropTradingProtocol.IOrderInfoMsg[]|null);

        /** ServerResponseMsg LoggedOff */
        LoggedOff?: (PropTradingProtocol.ILoggedOffMsg|null);

        /** ServerResponseMsg LogMsg */
        LogMsg?: (PropTradingProtocol.ILogInfoMsg|null);

        /** ServerResponseMsg SymbolLookup */
        SymbolLookup?: (PropTradingProtocol.ISymbolLookupRespMsg|null);

        /** ServerResponseMsg PositionInfo */
        PositionInfo?: (PropTradingProtocol.IPositionInfoMsg[]|null);

        /** ServerResponseMsg CancelFlatMsg */
        CancelFlatMsg?: (PropTradingProtocol.ICancelFlatRespMsg|null);

        /** ServerResponseMsg BracketInfo */
        BracketInfo?: (PropTradingProtocol.IBracketInfoMsg[]|null);

        /** ServerResponseMsg BracketStrategyInsertReport */
        BracketStrategyInsertReport?: (PropTradingProtocol.IBracketInsertReportMsg|null);

        /** ServerResponseMsg AccountSubscribeResp */
        AccountSubscribeResp?: (PropTradingProtocol.IAccountSubscribeRespMsg|null);

        /** ServerResponseMsg AccountStatusUpdates */
        AccountStatusUpdates?: (PropTradingProtocol.IAccountStatusUpdateMsg[]|null);

        /** ServerResponseMsg OcoGroupReport */
        OcoGroupReport?: (PropTradingProtocol.IOcoGroupReportMsg|null);

        /** ServerResponseMsg FillReports */
        FillReports?: (PropTradingProtocol.IFillReportMsg[]|null);

        /** ServerResponseMsg TradeReports */
        TradeReports?: (PropTradingProtocol.ITradeReportMsg[]|null);

        /** ServerResponseMsg FillTradeReports */
        FillTradeReports?: (PropTradingProtocol.IFillTradeReportMsg[]|null);

        /** ServerResponseMsg CancelReverseMsg */
        CancelReverseMsg?: (PropTradingProtocol.ICancelReverseRespMsg|null);

        /** ServerResponseMsg UserSessionLogs */
        UserSessionLogs?: (PropTradingProtocol.IUserSessionLogMsg[]|null);

        /** ServerResponseMsg AccountTradingSymbolInfoUpdate */
        AccountTradingSymbolInfoUpdate?: (PropTradingProtocol.IAccountTradingSymbolInfoMsg[]|null);

        /** ServerResponseMsg CurrencyRates */
        CurrencyRates?: (PropTradingProtocol.ICurrencyRateInfoMsg[]|null);

        /** ServerResponseMsg AccountTradingSymbolInfoResp */
        AccountTradingSymbolInfoResp?: (PropTradingProtocol.IAccountTradingSymbolInfoRespMsg|null);

        /** ServerResponseMsg AccountUserRiskRuleInfoResp */
        AccountUserRiskRuleInfoResp?: (PropTradingProtocol.IAccountUserRiskRuleInfoRespMsg|null);

        /** ServerResponseMsg AccountUserRiskRuleSetResp */
        AccountUserRiskRuleSetResp?: (PropTradingProtocol.IAccountUserRiskRuleSetRespMsg|null);

        /** ServerResponseMsg AccountDailyLockoutResp */
        AccountDailyLockoutResp?: (PropTradingProtocol.IAccountDailyLockoutRespMsg|null);

        /** ServerResponseMsg AccountHistoricalSessionResp */
        AccountHistoricalSessionResp?: (PropTradingProtocol.IAccountHistoricalSessionRespMsg|null);

        /** ServerResponseMsg ContractsResps */
        ContractsResps?: (PropTradingProtocol.IContractResponseWrapperMsg|null);

        /** ServerResponseMsg AccountTradingSymbolMultiResp */
        AccountTradingSymbolMultiResp?: (PropTradingProtocol.IAccountTradingSymbolMultiRespMsg|null);
    }

    /** Represents a ServerResponseMsg. */
    class ServerResponseMsg implements IServerResponseMsg {

        /**
         * Constructs a new ServerResponseMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.IServerResponseMsg);

        /** ServerResponseMsg LoginMsg. */
        public LoginMsg?: (PropTradingProtocol.ILoginResponseMsg|null);

        /** ServerResponseMsg Pong. */
        public Pong?: (PropTradingProtocol.IPongMsg|null);

        /** ServerResponseMsg InfoMsg. */
        public InfoMsg?: (PropTradingProtocol.IInfoRespMsg|null);

        /** ServerResponseMsg BalanceInfo. */
        public BalanceInfo: PropTradingProtocol.IBalanceMsg[];

        /** ServerResponseMsg ContractMsg. */
        public ContractMsg?: (PropTradingProtocol.IContractRespMsg|null);

        /** ServerResponseMsg DailyPls. */
        public DailyPls: PropTradingProtocol.IDailyPlRespMsg[];

        /** ServerResponseMsg OrderInfo. */
        public OrderInfo: PropTradingProtocol.IOrderInfoMsg[];

        /** ServerResponseMsg LoggedOff. */
        public LoggedOff?: (PropTradingProtocol.ILoggedOffMsg|null);

        /** ServerResponseMsg LogMsg. */
        public LogMsg?: (PropTradingProtocol.ILogInfoMsg|null);

        /** ServerResponseMsg SymbolLookup. */
        public SymbolLookup?: (PropTradingProtocol.ISymbolLookupRespMsg|null);

        /** ServerResponseMsg PositionInfo. */
        public PositionInfo: PropTradingProtocol.IPositionInfoMsg[];

        /** ServerResponseMsg CancelFlatMsg. */
        public CancelFlatMsg?: (PropTradingProtocol.ICancelFlatRespMsg|null);

        /** ServerResponseMsg BracketInfo. */
        public BracketInfo: PropTradingProtocol.IBracketInfoMsg[];

        /** ServerResponseMsg BracketStrategyInsertReport. */
        public BracketStrategyInsertReport?: (PropTradingProtocol.IBracketInsertReportMsg|null);

        /** ServerResponseMsg AccountSubscribeResp. */
        public AccountSubscribeResp?: (PropTradingProtocol.IAccountSubscribeRespMsg|null);

        /** ServerResponseMsg AccountStatusUpdates. */
        public AccountStatusUpdates: PropTradingProtocol.IAccountStatusUpdateMsg[];

        /** ServerResponseMsg OcoGroupReport. */
        public OcoGroupReport?: (PropTradingProtocol.IOcoGroupReportMsg|null);

        /** ServerResponseMsg FillReports. */
        public FillReports: PropTradingProtocol.IFillReportMsg[];

        /** ServerResponseMsg TradeReports. */
        public TradeReports: PropTradingProtocol.ITradeReportMsg[];

        /** ServerResponseMsg FillTradeReports. */
        public FillTradeReports: PropTradingProtocol.IFillTradeReportMsg[];

        /** ServerResponseMsg CancelReverseMsg. */
        public CancelReverseMsg?: (PropTradingProtocol.ICancelReverseRespMsg|null);

        /** ServerResponseMsg UserSessionLogs. */
        public UserSessionLogs: PropTradingProtocol.IUserSessionLogMsg[];

        /** ServerResponseMsg AccountTradingSymbolInfoUpdate. */
        public AccountTradingSymbolInfoUpdate: PropTradingProtocol.IAccountTradingSymbolInfoMsg[];

        /** ServerResponseMsg CurrencyRates. */
        public CurrencyRates: PropTradingProtocol.ICurrencyRateInfoMsg[];

        /** ServerResponseMsg AccountTradingSymbolInfoResp. */
        public AccountTradingSymbolInfoResp?: (PropTradingProtocol.IAccountTradingSymbolInfoRespMsg|null);

        /** ServerResponseMsg AccountUserRiskRuleInfoResp. */
        public AccountUserRiskRuleInfoResp?: (PropTradingProtocol.IAccountUserRiskRuleInfoRespMsg|null);

        /** ServerResponseMsg AccountUserRiskRuleSetResp. */
        public AccountUserRiskRuleSetResp?: (PropTradingProtocol.IAccountUserRiskRuleSetRespMsg|null);

        /** ServerResponseMsg AccountDailyLockoutResp. */
        public AccountDailyLockoutResp?: (PropTradingProtocol.IAccountDailyLockoutRespMsg|null);

        /** ServerResponseMsg AccountHistoricalSessionResp. */
        public AccountHistoricalSessionResp?: (PropTradingProtocol.IAccountHistoricalSessionRespMsg|null);

        /** ServerResponseMsg ContractsResps. */
        public ContractsResps?: (PropTradingProtocol.IContractResponseWrapperMsg|null);

        /** ServerResponseMsg AccountTradingSymbolMultiResp. */
        public AccountTradingSymbolMultiResp?: (PropTradingProtocol.IAccountTradingSymbolMultiRespMsg|null);

        /**
         * Creates a new ServerResponseMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerResponseMsg instance
         */
        public static create(properties?: PropTradingProtocol.IServerResponseMsg): PropTradingProtocol.ServerResponseMsg;

        /**
         * Encodes the specified ServerResponseMsg message. Does not implicitly {@link PropTradingProtocol.ServerResponseMsg.verify|verify} messages.
         * @param message ServerResponseMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.IServerResponseMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerResponseMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.ServerResponseMsg.verify|verify} messages.
         * @param message ServerResponseMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.IServerResponseMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerResponseMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerResponseMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.ServerResponseMsg;

        /**
         * Decodes a ServerResponseMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerResponseMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.ServerResponseMsg;

        /**
         * Verifies a ServerResponseMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerResponseMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerResponseMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.ServerResponseMsg;

        /**
         * Creates a plain object from a ServerResponseMsg message. Also converts values to other types if specified.
         * @param message ServerResponseMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.ServerResponseMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerResponseMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerResponseMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** AccountSubscriptionModeEnum enum. */
    enum AccountSubscriptionModeEnum {
        Undefined = 0,
        Manual = 1,
        Existing = 2,
        ExistingAndNew = 3
    }

    /** Properties of a LoginRequestMsg. */
    interface ILoginRequestMsg {

        /** LoginRequestMsg Token */
        Token?: (string|null);

        /** LoginRequestMsg OtpCode */
        OtpCode?: (string|null);

        /** LoginRequestMsg IsManualAccountSubscribe */
        IsManualAccountSubscribe?: (boolean|null);

        /** LoginRequestMsg KeepConcurrentSessionOn */
        KeepConcurrentSessionOn?: (boolean|null);

        /** LoginRequestMsg AccountSubscriptionMode */
        AccountSubscriptionMode?: (PropTradingProtocol.AccountSubscriptionModeEnum|null);
    }

    /** Represents a LoginRequestMsg. */
    class LoginRequestMsg implements ILoginRequestMsg {

        /**
         * Constructs a new LoginRequestMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ILoginRequestMsg);

        /** LoginRequestMsg Token. */
        public Token: string;

        /** LoginRequestMsg OtpCode. */
        public OtpCode: string;

        /** LoginRequestMsg IsManualAccountSubscribe. */
        public IsManualAccountSubscribe: boolean;

        /** LoginRequestMsg KeepConcurrentSessionOn. */
        public KeepConcurrentSessionOn: boolean;

        /** LoginRequestMsg AccountSubscriptionMode. */
        public AccountSubscriptionMode: PropTradingProtocol.AccountSubscriptionModeEnum;

        /**
         * Creates a new LoginRequestMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequestMsg instance
         */
        public static create(properties?: PropTradingProtocol.ILoginRequestMsg): PropTradingProtocol.LoginRequestMsg;

        /**
         * Encodes the specified LoginRequestMsg message. Does not implicitly {@link PropTradingProtocol.LoginRequestMsg.verify|verify} messages.
         * @param message LoginRequestMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ILoginRequestMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequestMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.LoginRequestMsg.verify|verify} messages.
         * @param message LoginRequestMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ILoginRequestMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequestMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.LoginRequestMsg;

        /**
         * Decodes a LoginRequestMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.LoginRequestMsg;

        /**
         * Verifies a LoginRequestMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequestMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequestMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.LoginRequestMsg;

        /**
         * Creates a plain object from a LoginRequestMsg message. Also converts values to other types if specified.
         * @param message LoginRequestMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.LoginRequestMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequestMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginRequestMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginResponseMsg. */
    interface ILoginResponseMsg {

        /** LoginResponseMsg Success */
        Success?: (boolean|null);

        /** LoginResponseMsg Reason */
        Reason?: (string|null);

        /** LoginResponseMsg ReasonCode */
        ReasonCode?: (PropTradingProtocol.LoginReasonsCodeEnum|null);

        /** LoginResponseMsg Version */
        Version?: (number|Long|null);
    }

    /** Represents a LoginResponseMsg. */
    class LoginResponseMsg implements ILoginResponseMsg {

        /**
         * Constructs a new LoginResponseMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ILoginResponseMsg);

        /** LoginResponseMsg Success. */
        public Success: boolean;

        /** LoginResponseMsg Reason. */
        public Reason: string;

        /** LoginResponseMsg ReasonCode. */
        public ReasonCode: PropTradingProtocol.LoginReasonsCodeEnum;

        /** LoginResponseMsg Version. */
        public Version: (number|Long);

        /**
         * Creates a new LoginResponseMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponseMsg instance
         */
        public static create(properties?: PropTradingProtocol.ILoginResponseMsg): PropTradingProtocol.LoginResponseMsg;

        /**
         * Encodes the specified LoginResponseMsg message. Does not implicitly {@link PropTradingProtocol.LoginResponseMsg.verify|verify} messages.
         * @param message LoginResponseMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ILoginResponseMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponseMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.LoginResponseMsg.verify|verify} messages.
         * @param message LoginResponseMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ILoginResponseMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponseMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponseMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.LoginResponseMsg;

        /**
         * Decodes a LoginResponseMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponseMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.LoginResponseMsg;

        /**
         * Verifies a LoginResponseMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponseMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponseMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.LoginResponseMsg;

        /**
         * Creates a plain object from a LoginResponseMsg message. Also converts values to other types if specified.
         * @param message LoginResponseMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.LoginResponseMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponseMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginResponseMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoggedOffMsg. */
    interface ILoggedOffMsg {

        /** LoggedOffMsg Reason */
        Reason?: (string|null);
    }

    /** Represents a LoggedOffMsg. */
    class LoggedOffMsg implements ILoggedOffMsg {

        /**
         * Constructs a new LoggedOffMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: PropTradingProtocol.ILoggedOffMsg);

        /** LoggedOffMsg Reason. */
        public Reason: string;

        /**
         * Creates a new LoggedOffMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoggedOffMsg instance
         */
        public static create(properties?: PropTradingProtocol.ILoggedOffMsg): PropTradingProtocol.LoggedOffMsg;

        /**
         * Encodes the specified LoggedOffMsg message. Does not implicitly {@link PropTradingProtocol.LoggedOffMsg.verify|verify} messages.
         * @param message LoggedOffMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PropTradingProtocol.ILoggedOffMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoggedOffMsg message, length delimited. Does not implicitly {@link PropTradingProtocol.LoggedOffMsg.verify|verify} messages.
         * @param message LoggedOffMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PropTradingProtocol.ILoggedOffMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoggedOffMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoggedOffMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropTradingProtocol.LoggedOffMsg;

        /**
         * Decodes a LoggedOffMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoggedOffMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropTradingProtocol.LoggedOffMsg;

        /**
         * Verifies a LoggedOffMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoggedOffMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoggedOffMsg
         */
        public static fromObject(object: { [k: string]: any }): PropTradingProtocol.LoggedOffMsg;

        /**
         * Creates a plain object from a LoggedOffMsg message. Also converts values to other types if specified.
         * @param message LoggedOffMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PropTradingProtocol.LoggedOffMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoggedOffMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoggedOffMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
