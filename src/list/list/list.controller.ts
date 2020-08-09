import { Controller, Get, NotImplementedException } from '@nestjs/common';
import { List } from '../list.entity';
import { ListsService } from '../lists.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('list')
export class ListController {
    constructor(private contactsService: ListsService) { }

    @Get()
    index(): Promise<List[]> {
        return this.contactsService.findAll();
    }

    //Post decorator to create an endpoint thar accepts Post requests.
    //Since we add the create path to the @Post decorator our endpoint will be /List/create.
    @Post('create')
    async create(@Body() contactData: List): Promise<any> {
        return this.contactsService.create(contactData);
    }

    @Put(':id/update')
    async update(@Param('idx') idx, @Body() contactData: List): Promise<any> {
        contactData.idx = Number(idx);
        console.log('Update #' + contactData.idx)
        return this.contactsService.update(contactData);
    } 

    @Delete(':id/delete')
    async delete(@Param('idx') idx): Promise<any> {
      return this.contactsService.delete(idx);
    } 

}