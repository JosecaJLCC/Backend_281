import { Controller,Patch, Post, Body, Get, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { PersonasService } from './personas.service';
import { Persona } from './persona.entity';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Controller('persona')
export class PersonasController {

    constructor(private personasService:PersonasService){}

    @Post()
    createPersona(@Body() newPersona: CreatePersonaDto){
        return this.personasService.createPersona(newPersona)
    }

    @Get()
    getPersonas(): Promise<Persona[]>{
        return this.personasService.getPersonas();
    }

    @Get(':ci')
    getPersona(@Param('ci')ci:string){
        console.log(ci);
        console.log(typeof ci);
        return this.personasService.getPersona(ci);
    }

    @Delete(':ci')
    deletePersona(@Param('ci', ParseIntPipe)ci:string){
        return this.personasService.deletePersona(ci);
    }

    @Patch(':ci')
        updatePersona(@Param('ci')ci:string, @Body() persona:UpdatePersonaDto){
            return this.personasService.updatePersona(ci, persona);
        }
    

}
