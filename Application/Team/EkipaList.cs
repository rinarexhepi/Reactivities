
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Team
{
    public class EkipaList
    {
        public class Query : IRequest<List<Ekipa>> { }

        public class Handler : IRequestHandler<Query, List<Ekipa>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Ekipa>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Ekipa.ToListAsync();
            }
        }
    }
}