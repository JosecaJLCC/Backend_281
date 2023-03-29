import{Entity,Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('persona')
export class Persona{
    @PrimaryGeneratedColumn()
    ci:string;

    @Column()
    p_nombre:string
    @Column({nullable:true})
    s_nombre:string
    @Column({nullable:true})
    appaterno:string
    @Column({nullable:true})
    apmaterno:string
    @Column()
    sexo:string
    @Column({type:'date'})
    fechanac:Date
}