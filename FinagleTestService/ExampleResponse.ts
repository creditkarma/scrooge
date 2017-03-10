/**
  Generated by Scrooge
    version: 4.13.0-SNAPSHOT
    rev: 382b53bc01abc74e0182f0c8e1ece5cc55c11355
    built at: 20170301-123026
*/

// Import this file with:
//   require 'thrift.ExampleResponse'
// Note: This file depends on libthrift!

const thrift = require("thrift");
const Thrift = thrift.Thrift;
const Q = thrift.Q;



export class ExampleResponse {
    public success: boolean;
    public something: number;
    
    constructor(args?) {
        this.something = null;
        
        if (args) {
            if (args.something !== undefined && args.something !== null) {
                this.something = args.something;
            } else {
                throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field something is unset!');
            }
            
        }
    }

    public read(input) {
        input.readStructBegin();
        while (true) {
            const ret = input.readFieldBegin();
            const fname = ret.fname;
            const ftype = ret.ftype;
            const fid = ret.fid;
            if (ftype === Thrift.Type.STOP) {
                break;
            }
            switch (fid) {
                case 1:
                    if (ftype === Thrift.Type.Number) {
                        this.something = input.read();
                    } else {
                        input.skip(ftype);
                    }
                    break;
                
                default:
                    input.skip(ftype);
            }
            
            
            input.readFieldEnd();
        }
        input.readStructEnd();
        return;
    }

    public write(output) {
        output.writeStructBegin("ExampleResponse");
        if (this.something !== null && this.something !== undefined) {
            output.writeFieldBegin("something", Thrift.Type.Number, 1);
            output.writeNumber(this.something);
            output.writeFieldEnd();
        }
        
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
}