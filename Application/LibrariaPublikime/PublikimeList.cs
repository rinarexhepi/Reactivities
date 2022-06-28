
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.LibrariaPublikime
{
    public class PublikimeList
    {
        public class Query : IRequest<List<Publikime>> { }
        public class Handler : IRequestHandler<Query, List<Publikime>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Publikime>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Publikime.ToListAsync();
            }
        }
    }
}