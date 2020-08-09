import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from './list.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class ListsService {
    constructor(
        @InjectRepository(List)
        private ListRepository: Repository<List>,
        // call to run CRUD operations against the appDB table.
    ) { }

    async  findAll(): Promise<List[]> {
        return await this.ListRepository.find();
    }

    async  create(list: List): Promise<List> {
        return await this.ListRepository.save(list);
    }

    async update(list: List): Promise<UpdateResult> {
        return await this.ListRepository.update(list.idx, list);
    }

    async delete(idx): Promise<DeleteResult> {
        return await this.ListRepository.delete(idx);
    }
}