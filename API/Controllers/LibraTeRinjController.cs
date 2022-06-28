using Application.LibrariaTeReja;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class LibraTeRinjController : BaseApiController
    {
        //Get
        [HttpGet]
        public async Task<ActionResult<List<LibraTeRinj>>> GetLibratERinj()
        {
            return await Mediator.Send(new LibraTeRinjList.Query());
        }

        //Get by id
        [HttpGet("{id}")]
        public async Task<ActionResult<LibraTeRinj>> GetLibratERinj(int id)
        {
            return await Mediator.Send(new LibraTeRinjById.Query { ID = id });
        }

        //Create
        [HttpPost]
        public async Task<IActionResult> CreateLibratERinj(LibraTeRinj libratERinj)
        {
            return Ok(await Mediator.Send(new LibraTeRinjCreate.Command { LibraTeRinj = libratERinj }));
        }

        //Edit
        [HttpPut("{id}")]
        public async Task<IActionResult> EditLibratERinj(int id, LibraTeRinj libratERinj)
        {
            libratERinj.ID = id;
            return Ok(await Mediator.Send(new LibraTeRinjEdit.Command { LibraTeRinj = libratERinj }));
        }



        //Delete
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLibratERinj(int id)
        {
            return Ok(await Mediator.Send(new LibraTeRinjDelete.Command { ID = id }));
        }

    }
}
