import Tags from '../models/tag.model';

async function GetAll() {
    const QueryResult = await Tags.findAll();
    if (QueryResult === null ) {
        return 'something went wrong';
    }
    return QueryResult;
}

async function GetById(tid: string) {
    const QueryResult = await Tags.findByPk(tid);
    if (QueryResult === null ) {
        return 'something went wrong';
    }
    return QueryResult;
}

async function CreateTag(tname: string, tcolor: string) {
    const QueryResult = await Tags.create({ name: tname, color: tcolor });
    return QueryResult;
}

async function UpdateById(tid: string, tname: string, tcolor: string) {
    const QueryResult = await Tags.update(
        {
            name: tname,
            color: tcolor
        }, 
        {
            where: { id: tid }, 
        },
    );
    return QueryResult;
}

async function DeleteById(tid: string) {
    const QueryResult = await Tags.destroy({ where: { id: tid } });
    return QueryResult;
}

export { GetAll, GetById, CreateTag, UpdateById, DeleteById };