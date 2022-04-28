using Application.Country;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ShtetiController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Shteti>>> GetShtetet()
        {
            return await Mediator.Send(new ShtetetList.Query());
        }

        [HttpGet("{id_shteti}")]
        public async Task<ActionResult<Shteti>> GetShtetet(int id_shteti)
        {
            return await Mediator.Send(new Application.Country.ShtetiId.Query { ID_Shteti = id_shteti });
        }
        
        [HttpPost]

        public async Task<IActionResult> CreateShteti(Shteti shteti)
        {
            return Ok(await Mediator.Send(new Application.Country.Create.Command { Shteti = shteti }));
        }

        [HttpDelete ("{id_shteti}")]
        public async Task<IActionResult> DeleteShteti(int id_shteti)
        {
            return Ok(await Mediator.Send(new Application.Country.Delete.Command { ID_Shteti = id_shteti }));
        }
    }
}
