using Application.LibrariaBoterore;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class LibraBoterorController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<LibraBoteror>>> GetLibraBoteror()
        {
            return await Mediator.Send(new LibraBoterorList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LibraBoteror>> GetLibriBoteror(int id)
        {
            return await Mediator.Send(new LibraBoterorByid.Query { ID = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateLibraBoteror(LibraBoteror libraBoteror)
        {
            return Ok(await Mediator.Send(new LibraBoterorCreate.Command { LibraBoteror = libraBoteror }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditLibraBoteror(int id, LibraBoteror libraBoteror)
        {
            libraBoteror.ID = id;
            return Ok(await Mediator.Send(new LibraBoterorEdit.Command { LibraBoteror = libraBoteror }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLibraBoteror(int id)
        {
            return Ok(await Mediator.Send(new LibraBoterorDelete.Command { ID = id }));
        }
    }
}
