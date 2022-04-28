using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Country
{
    public class ShtetetList
    {
        public class Query : IRequest<List<Shteti>> { }

        public class Handler : IRequestHandler<Query, List<Shteti>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Shteti>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Shteti.ToListAsync();
            }
        }
    }
}
