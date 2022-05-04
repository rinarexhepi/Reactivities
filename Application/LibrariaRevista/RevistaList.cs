

using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.LibrariaRevista
{
    public class RevistaList
    {
        public class Query : IRequest<List<Revista>> { }

        public class Handler : IRequestHandler<Query, List<Revista>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Revista>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Revista.ToListAsync();
            }
        }
    }
}
