export class Post{
    constructor(id, title, content, categories) {
        this.categories = categories;
        this.content = content;
        this.id = id;
        this.title = title;
    }
}