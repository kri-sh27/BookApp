import { Book } from 'src/typeorm/entities/Book';
import { CreateBook } from 'src/types/utils/CreateBookType';
import { Repository } from 'typeorm';
import { UpdateBookDto } from './dtos/UpdateBook.dto';
export declare class BookService {
    private bookrepo;
    constructor(bookrepo: Repository<Book>);
    getBooks(): Promise<Book[]>;
    createBook(createBook: CreateBook): string;
    updateBook(id: number, updateBook: UpdateBookDto): string;
    deleteBook(id: number): string;
    getBook(id: number): Promise<Book>;
}
