

using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.LibrariaBoterore
{
    public class LibraBoterorList
    {
        public class Query : IRequest<List<LibraBoteror>> { }

        public class Handler : IRequestHandler<Query, List<LibraBoteror>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<LibraBoteror>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.LibraBoteror.ToListAsync();
            }
        }
    }
}
