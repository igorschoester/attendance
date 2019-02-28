import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, DeleteResult} from 'typeorm';
import {Person} from './person.entity';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Person)
        private readonly personRepository: Repository<Person>,
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
}
