

using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.LibrariaPerFemije 
{
    public class LibratPerFemijeList
    {
        public class Query : IRequest<List<LibraPerFemije>> { }

        public class Handler : IRequestHandler<Query, List<LibraPerFemije>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<LibraPerFemije>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.LibraPerFemije.ToListAsync();
            }
        }
    }
}
