
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
    constructor(@InjectRepository(Usuario)private usuarioRepository:Repository<Usuario>){}    
    
     
    async createUsuario(Usuario: CreateUsuarioDto){
        const usuarioFound = this.usuarioRepository.findOne({
            where:{
                cuenta:Usuario.cuenta
            }
        })

        if(usuarioFound){
            return new HttpException('Usuario ya existe', HttpStatus.CONFLICT)
        }
        const newusuario = this.usuarioRepository.create(Usuario);
        return this.usuarioRepository.save(newusuario);
    }

    getUsuarios(){
        return this.usuarioRepository.find()
    }

    async getUsuario(cuenta:string){
        const usuarioFound = await this.usuarioRepository.findOne({
            where:{
                cuenta
            }
        });
        if(!usuarioFound){
            return new HttpException('Usuario no encontrada',HttpStatus.NOT_FOUND);
        }       
        return usuarioFound;       
    }

    async deleteUsuario(cuenta:string){
        const result=await this.usuarioRepository.delete({cuenta});

        if(result.affected===0){
            return new HttpException('Usuario no encontrada ', HttpStatus.NOT_FOUND);
        }
        return result;
    }

    async updateUsuario(cuenta:string, Usuario:UpdateUsuarioDto){
        const usuarioFound = await this.usuarioRepository.findOne({
            where:{
                cuenta
            }
        })

        if (!usuarioFound){
            return new HttpException('Usuario no encontrada: ', HttpStatus.NOT_FOUND);
        }
        const updateUsuario = Object.assign(usuarioFound, Usuario)
        return this.usuarioRepository.save(updateUsuario);
    }
}

