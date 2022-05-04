
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Libraria
{
    public class LibriList
    {
        public class Query : IRequest<List<Libri>> { }

        public class Handler : IRequestHandler<Query, List<Libri>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Libri>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Libri.ToListAsync();
            }
        }
    }
}
