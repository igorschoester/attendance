import { CreateDateColumn, Entity, ManyToOne, UpdateDateColumn } from 'typeorm';
import { Building } from '../building/building.entity';
import { Person } from '../person/person.entity';

@Entity()
export class Attendance {
	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne( () => Person, person => person.attendance, { primary: true } )
	person: Person;

	@ManyToOne( () => Building, building => building.attendance, { primary: true } )
	building: Building;
}
