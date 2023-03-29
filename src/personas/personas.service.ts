import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Persona } from './persona.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';


@Injectable()
export class PersonasService {
    constructor(@InjectRepository(Persona)private personaRepository:Repository<Persona>){}    
    
     
    async createPersona(Persona: CreatePersonaDto){
        const personaFound = this.personaRepository.findOne({
            where:{
                ci:Persona.ci
            }
        })

        if(personaFound){
            return new HttpException('Persona ya existe', HttpStatus.CONFLICT)
        }
        const newPersona=this.personaRepository.create(Persona);
        return this.personaRepository.save(newPersona);
    }

    getPersonas(){
        return this.personaRepository.find()
    }

    async getPersona(ci:string){
        const personaFound = await this.personaRepository.findOne({
            where:{
                ci
            }
        });
        if(!personaFound){
            return new HttpException('Persona no encontrada',HttpStatus.NOT_FOUND);
        }       
        return personaFound;       
    }

    async deletePersona(ci:string){
        const result=await this.personaRepository.delete({ci});

        if(result.affected===0){
            return new HttpException('Persona no encontrada ', HttpStatus.NOT_FOUND);
        }
        return result;
    }

    async updatePersona(ci:string, persona:UpdatePersonaDto){
        const personaFound = await this.personaRepository.findOne({
            where:{
                ci
            }
        })

        if (!personaFound){
            return new HttpException('Persona no encontrada: ', HttpStatus.NOT_FOUND);
        }
        const updatePersona = Object.assign(personaFound, persona)
        return this.personaRepository.save(updatePersona);
    }
}
