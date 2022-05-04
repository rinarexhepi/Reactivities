
using Application.Libraria;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class LibratController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Libri>>> GetLibrat()
        {
            return await Mediator.Send(new LibriList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Libri>> GetLibriId(int id)
        {
            return await Mediator.Send(new Application.Libraria.LibriById.Query { ID = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateLibri(Libri libri)
        {
            return Ok(await Mediator.Send(new Application.Libraria.LibriCreate.Command { Libri = libri })); 
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditBook(int id, Libri libri)
        {
            libri.ID = id;
            return Ok(await Mediator.Send(new Application.Libraria.LibriEdit.Command { Libri = libri}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLibri(int id)
        {
            return Ok(await Mediator.Send(new Application.Libraria.LibriDelete.Command { ID = id}));
        }
        
    }
}
