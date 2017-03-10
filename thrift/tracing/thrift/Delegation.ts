/**
 * Generated by Scrooge
 *   version: 4.13.0-SNAPSHOT
 *   rev: 382b53bc01abc74e0182f0c8e1ece5cc55c11355
 *   built at: 20170307-134415
 */
/**
 * Serializes an individual delegation.
 */

// Import this file with:
// import { Delegation } from 'thrift'
// Note: This file depends on libthrift!

import thrift from 'thrift'
import {Q, Thrift} from 'thrift'



export class Delegation {
    public success: boolean
    public src: string
    public dst: string
    
    constructor(args?) {
        if (args) {
            if (args.src !== undefined && args.src !== null) {
                this.src = args.src
            } else {
                throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field src is unset!')
            }
            if (args.dst !== undefined && args.dst !== null) {
                this.dst = args.dst
            } else {
                throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field dst is unset!')
            }
            
        }
    }

    public read(input) {
        input.readStructBegin()
        while (true) {
            const ret = input.readFieldBegin()
            const fname = ret.fname
            const ftype = ret.ftype
            const fid = ret.fid
            if (ftype === Thrift.Type.STOP) {
                break
            }
            switch (fid) {
                case 1:
                                        if (ftype === Thrift.Type.String) {
                        this.src = input.read()
                    
                    
                    } else {
                        input.skip(ftype)
                    }
                    break
                case 2:
                                        if (ftype === Thrift.Type.String) {
                        this.dst = input.read()
                    
                    
                    } else {
                        input.skip(ftype)
                    }
                    break
                
                default:
                    input.skip(ftype)
            }
            
            
            input.readFieldEnd()
        }
        input.readStructEnd()
        return
    }

    public write(output) {
        output.writeStructBegin("Delegation")
        if (this.src !== null && this.src !== undefined) {
                    output.writeFieldBegin("src", Thrift.Type.String, 1)
            output.writeString(this.src)
        
        
        output.writeFieldEnd()
        }
        if (this.dst !== null && this.dst !== undefined) {
                    output.writeFieldBegin("dst", Thrift.Type.String, 2)
            output.writeString(this.dst)
        
        
        output.writeFieldEnd()
        }
        
        output.writeFieldStop()
        output.writeStructEnd()
        return
    }
}