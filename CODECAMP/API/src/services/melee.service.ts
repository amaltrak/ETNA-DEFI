import Melee from "../models/melee.model";

async function GetAll() {
    const QueryResult = await Melee.findAll();
    if (QueryResult === null ) {
        return 'something went wrong';
    }
    return QueryResult;
}

async function GetById(cid: string) {
    const QueryResult = await Melee.findByPk(cid);
    if (QueryResult === null ) {
        return 'something went wrong';
    }
    return QueryResult;
}

async function CreateMelee(cdebut: Date, cfin: Date, cduree: number, cpause: number, crecurence: number) {
    const QueryResult = await Melee.create({ debut: cdebut, fin: cfin, duree: cduree, pause: cpause, recurence: crecurence });
    return QueryResult;
}

async function UpdateById(cid: string, cdebut: Date, cfin: Date, cduree: number, cpause: number, crecurence: number) {
    const QueryResult = await Melee.update(
        {
            debut: cdebut,
            fin: cfin,
            duree: cduree,
            pause: cpause,
            recurence: crecurence
        }, 
        {
            where: { id: cid }, 
        },
    );
    return QueryResult;
}

async function DeleteById(cid: string) {
    const delMelee = await GetById(cid);
    const QueryResult = await Melee.destroy({ delMelee });
    return QueryResult;
}

export { GetAll, GetById, CreateMelee, UpdateById, DeleteById };

