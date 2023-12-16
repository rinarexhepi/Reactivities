using Application.AutoretBoteror;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AutoriBoterorController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<AutoriBoteror>>> GetAutoretBoteror()
        {
            return await Mediator.Send(new AutoriBoterorList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AutoriBoteror>> GetAutoriBoterorById(int id)
        {
            return await Mediator.Send(new AutoriBoterorById.Query { ID = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateAutoriBoteror(AutoriBoteror autoriBoteror)
        {
            return Ok(await Mediator.Send(new AutoriBoterorCreate.Command { AutoriBoteror = autoriBoteror }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditAutoriBoteror(int id, AutoriBoteror autoriBoteror)
        {
            autoriBoteror.ID = id;

            return Ok(await Mediator.Send(new AutoriBoterorEdit.Command { AutoriBoteror = autoriBoteror }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAutoriBoteror(int id)
        {
            return Ok(await Mediator.Send(new AutoriBoterorDelete.Command { ID = id }));
        }
    }
}
