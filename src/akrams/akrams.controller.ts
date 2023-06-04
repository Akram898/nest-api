import { Controller, Get, Post, Put, Delete, Query, Param,  Body } from '@nestjs/common';
import { type } from 'os';
import { CreateAkramDto } from './dto/create-akram.dto';

@Controller('akrams')
export class AkramsController {
    
@Get()
getAkrams(){
    return []
}

@Get()
getAkramsType(@Query('type') type: string){
    return [{type }]
}


@Get(':id')
getOneAkram(@Param('id') id: string){
    return {
        id
    }
}

@Post(':id')
createtAkram(@Param('id') id: string){
    return {}
}

@Post()
createtAkramDto(@Body() createAkramDto: CreateAkramDto
){
    return {
        name: createAkramDto.name,
    }
}

@Put(':id')
updatetAkram(@Param('id') id: string){
    return {}
}

@Delete(':id')
removetAkram(@Param('id') id: string){
    return {}
}

}
