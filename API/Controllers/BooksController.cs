using Application.Libraria;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BooksController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetBooks()
        {
            return await Mediator.Send(new BooksList.Query());
        }

        [HttpGet("{isbn}")]
        public async Task<ActionResult<Book>> GetBook(string isbn)
        {
            return await Mediator.Send(new Application.Books.Details.Query { Isbn = isbn });
        }

        [HttpPost]
        public async Task<IActionResult> CreateBook(Book book)
        {
            return Ok(await Mediator.Send(new Application.Books.Create.Command{ Book = book}));
        }

        [HttpPut("{isbn}")]
        public async Task<IActionResult> EditBook(string isbn, Book book)
        {
            book.Isbn = isbn;
            return Ok(await Mediator.Send(new Application.Books.Edit.Command { Book = book}));
        }

        [HttpDelete("{isbn}")]
        public async Task<IActionResult> DeleteBook(string isbn)
        {
            
            return Ok(await Mediator.Send(new Application.Books.Delete.Command { Isbn = isbn }));
        }

    }

}
