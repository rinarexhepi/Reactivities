
using Application.LibrariaRevista;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class RevistatController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Revista>>> GetRevistat()
        {
            return await Mediator.Send(new RevistaList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Revista>> GetRevistaById(int id)
        {
            return await Mediator.Send(new RevistaById.Query { ID = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateRevista(Revista revista)
        {
            return Ok(await Mediator.Send(new RevistaCreate.Command { Revista = revista}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditRevista(int id, Revista revista)
        {
            revista.ID = id;

            return Ok(await Mediator.Send(new RevistaEdit.Command { Revista = revista}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRevista(int id)
        {
            return Ok(await Mediator.Send(new RevistaDelete.Command { ID = id }));
        }

    }
}
