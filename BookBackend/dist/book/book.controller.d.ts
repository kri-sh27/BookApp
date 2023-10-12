import { BookService } from './book.service';
import { CreateBookDto } from './dtos/CreateBook.dto';
import { UpdateBookDto } from './dtos/UpdateBook.dto';
export declare class BookController {
    private bookservice;
    constructor(bookservice: BookService);
    getBook(id: number): Promise<import("../typeorm/entities/Book").Book>;
    getBooks(): Promise<import("../typeorm/entities/Book").Book[]>;
    createBook(createBookDto: CreateBookDto): string;
    updateBook(id: number, updateBookdto: UpdateBookDto): string;
    deleteBook(id: number): string;
}
