using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.LibrariaTekste
{
    public class TeksteList
    {
        public class Query : IRequest<List<Tekste>> { }

        public class Handler : IRequestHandler<Query, List<Tekste>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Tekste>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Tekste.ToListAsync();
            }
        }
    }
}
