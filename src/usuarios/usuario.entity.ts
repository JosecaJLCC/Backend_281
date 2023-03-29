import{Entity,Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('usuario')
export class Usuario{

    @PrimaryGeneratedColumn()
    cuenta:string;
    @Column({})
    password:string
    @Column({nullable:true})
    ci:string
    @Column({nullable:true})
    idrol:number
}