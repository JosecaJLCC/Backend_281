
import { Controller,Patch, Post, Body, Get, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuariosController {

    constructor(private usuariosService:UsuariosService){}

    @Post()
    createUsuario(@Body() newusuario: CreateUsuarioDto){
        return this.usuariosService.createUsuario(newusuario)
    }

    @Get()
    getUsuarios(): Promise<Usuario[]>{
        return this.usuariosService.getUsuarios();
    }

    @Get(':cuenta')
    getUsuario(@Param('cuenta')cuenta:string){
        console.log(cuenta);
        console.log(typeof cuenta);
        return this.usuariosService.getUsuario(cuenta);
    }

    @Delete(':cuenta')
    deleteusuario(@Param('cuenta', ParseIntPipe)cuenta:string){
        return this.usuariosService.deleteUsuario(cuenta);
    }

    @Patch(':cuenta')
        updateusuario(@Param('cuenta')cuenta:string, @Body() usuario:UpdateUsuarioDto){
            return this.usuariosService.updateUsuario(cuenta, usuario);
        }
    

}
