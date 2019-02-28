import {Body, Controller, Get, Param, Post, Delete} from '@nestjs/common';
import {DeleteResult} from 'typeorm';
import {PersonService} from './person.service';
import {Person} from './person.entity';
import {CreatePersonDto} from '../dto/create-person.dto';
import {CheckInDto} from '../dto/checkIn.dto';

@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService) {
    }

    @Post()
    async create(@Body() createPersonDto: CreatePersonDto): Promise<Person[]> {
        return await this.personService.create(createPersonDto);
    }

    @Get()
    async findAll(): Promise<Person[]> {
        return await this.personService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Person> {
        return await this.personService.findOne(id);
    }

    @Delete(':id')
    async remove(@Param('id') id): Promise<DeleteResult> {
        return await this.personService.remove(id);
    }

    @Post(':id/checkIn')
    async checkIn(@Param('id') id, @Body() checkInDto: CheckInDto): Promise<Person>  {
        return await this.personService.checkIn( id, checkInDto );
    }

    @Delete(':id/checkOut')
    async checkOut(@Param('id') id): Promise<Person>  {
        return await this.personService.checkOut(id);
    }
}
