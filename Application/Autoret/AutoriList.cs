
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Autoret
{
    public class AutoriList
    {
        public class Query : IRequest<List<Autori>> { }

        public class Handler : IRequestHandler<Query, List<Autori>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Autori>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Autori.ToListAsync();
            }
        }
    }
}