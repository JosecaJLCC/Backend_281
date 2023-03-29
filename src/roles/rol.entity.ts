import{Entity,Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('rol')
export class Rol{
    @PrimaryGeneratedColumn()
    idrol:number;

    @Column()
    nombrer:string

    @Column({nullable:true})
    descripcion:string
}