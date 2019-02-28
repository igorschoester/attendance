import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, DeleteResult} from 'typeorm';
import {Person} from './person.entity';
import {Building} from '../building/building.entity';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Person)
        private readonly personRepository: Repository<Person>,
        @InjectRepository(Building)
        private readonly buildingRepository: Repository<Building>,
    ) {
    }

    async create(createPersonDto): Promise<Person[]> {
        return await this.personRepository.save(createPersonDto);
    }

    async findAll(): Promise<Person[]> {
        return await this.personRepository.find();
    }

    async findOne(id): Promise<Person> {
        return await this.personRepository.findOneOrFail({where: {id}});
    }

    async remove(id): Promise<DeleteResult> {
        return await this.personRepository.delete({id});
    }

    async checkIn(id, checkInDto): Promise<Person>  {
        const person = await this.findOne( id );
        const building = await this.buildingRepository.findOneOrFail( checkInDto.buildingId );
        person.buildings = [ building ];
        return await this.personRepository.save( person );
    }

    async checkOut(id): Promise<Person>  {
        const person = await this.findOne( id );
        person.buildings = [];
        return await this.personRepository.save( person );
    }
}
