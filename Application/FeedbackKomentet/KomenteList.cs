using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.FeedbackKomentet
{
    public class KomenteList
    {
        public class Query : IRequest<List<Komente>> { }

        public class Handler : IRequestHandler<Query, List<Komente>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Komente>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Komente.ToListAsync();
            }
        }
    }
}