//afddsgfdsgdsgsd
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Rol } from './rol.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';

@Injectable()
export class RolesService {
    constructor(@InjectRepository(Rol)private rolRepository:Repository<Rol>){}    
    
     
    async createRol(Rol: CreateRolDto){
        const RolFound = this.rolRepository.findOne({
            where:{
                idrol:Rol.idrol
            }
        })

        if(RolFound){
            return new HttpException('Rol ya existe', HttpStatus.CONFLICT)
        }
        const newRol=this.rolRepository.create(Rol);
        return this.rolRepository.save(newRol);
    }

    getRoles(){
        return this.rolRepository.find()
    }

    async getRol(idrol:number){
        const RolFound = await this.rolRepository.findOne({
            where:{
                idrol
            }
        });
        if(!RolFound){
            return new HttpException('Rol no encontrada',HttpStatus.NOT_FOUND);
        }       
        return RolFound;       
    }

    async deleteRol(idrol:number){
        const result=await this.rolRepository.delete({idrol});

        if(result.affected===0){
            return new HttpException('Rol no encontrada ', HttpStatus.NOT_FOUND);
        }
        return result;
    }

    async updateRol(idrol:number, Rol:UpdateRolDto){
        const RolFound = await this.rolRepository.findOne({
            where:{
                idrol
            }
        })

        if (!RolFound){
            return new HttpException('Rol no encontrada: ', HttpStatus.NOT_FOUND);
        }
        const updateRol = Object.assign(RolFound, Rol)
        return this.rolRepository.save(updateRol);
    }
}
