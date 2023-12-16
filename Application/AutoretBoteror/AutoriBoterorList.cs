

using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.AutoretBoteror
{
    public class AutoriBoterorList
    {
        public class Query : IRequest<List<AutoriBoteror>> { }

        public class Handler : IRequestHandler<Query, List<AutoriBoteror>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<AutoriBoteror>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.AutoriBoteror.ToListAsync();
            }
        }
    }
}
