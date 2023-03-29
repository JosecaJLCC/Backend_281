import { Controller,Patch, Post, Body, Get, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { RolesService } from './roles.service';
import { Rol } from './rol.entity';
import { UpdateRolDto } from './dto/update-rol.dto';

@Controller('rol')
export class RolesController {

    constructor(private rolesService:RolesService){}

    @Post()
    createRol(@Body() newRol: CreateRolDto){
        return this.rolesService.createRol(newRol)
    }

    @Get()
    getRoles(): Promise<Rol[]>{
        return this.rolesService.getRoles();
    }

    @Get(':idrol')
    getRol(@Param('idrol')idrol:number){
        console.log(idrol);
        console.log(typeof idrol);
        return this.rolesService.getRol(idrol);
    }

    @Delete(':idrol')
    deleteRol(@Param('idrol', ParseIntPipe)idrol:number){
        return this.rolesService.deleteRol(idrol);
    }

    @Patch(':idrol')
        UpdateRol(@Param('idrol')idrol:number, @Body() Rol:UpdateRolDto){
            return this.rolesService.updateRol(idrol, Rol);
        }
    

}

