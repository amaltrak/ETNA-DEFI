import Comment from '../models/comment.model';

async function GetAll() {
    const QueryResult = await Comment.findAll();
    if (QueryResult === null ) {
        return 'something went wrong';
    }
    return QueryResult;
}

async function GetById(cid: string) {
    const QueryResult = await Comment.findByPk(cid);
    if (QueryResult === null ) {
        return 'something went wrong';
    }
    return QueryResult;
}

async function CreateComment(clogin: string, ccomment: string) {
    const QueryResult = await Comment.create({ login: clogin, comment: ccomment });
    return QueryResult;
}

async function UpdateById(cid: string, clogin: string, ccomment: string) {
    const QueryResult = await Comment.update(
        {
            login: clogin,
            comment: ccomment
        }, 
        {
            where: { id: cid }, 
        },
    );
    return QueryResult;
}

async function DeleteById(cid: string) {
    const delComment = await GetById(cid);
    const QueryResult = await Comment.destroy({ delComment });
    return QueryResult;
}

export { GetAll, GetById, CreateComment, UpdateById, DeleteById };