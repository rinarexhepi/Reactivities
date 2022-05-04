using Application.Revistat;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class RevistatController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Revista>>> GetRevistat()
        {
            return await Mediator.Send(new RevistatList.Query());
        }
    }
}
