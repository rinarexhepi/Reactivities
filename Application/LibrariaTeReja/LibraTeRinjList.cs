using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.LibrariaTeReja
{
    public class LibraTeRinjList
    {
        public class Query : IRequest<List<LibraTeRinj>> { }

        public class Handler : IRequestHandler<Query, List<LibraTeRinj>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<LibraTeRinj>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.LibraTeRinj.ToListAsync();
            }
        }
    }
}
