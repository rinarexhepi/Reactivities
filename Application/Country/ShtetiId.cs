
using Domain;
using MediatR;
using Persistence;

namespace Application.Country
{
    public class ShtetiId
     {
        public class Query : IRequest<Shteti> 
        {
            public int ID_Shteti { get; set; }
        }

        public class Handler : IRequestHandler<Query, Shteti>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Shteti> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Shteti.FindAsync(request.ID_Shteti);
            }
        }
    }
}
