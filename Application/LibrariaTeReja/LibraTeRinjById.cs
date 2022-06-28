using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaTeReja
{
    public class LibraTeRinjById
    {
        public class Query : IRequest<LibraTeRinj>
        {
            public int ID { get; set; }
        }

        public class Handler : IRequestHandler<Query, LibraTeRinj>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<LibraTeRinj> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.LibraTeRinj.FindAsync(request.ID);
            }
        }
    }
}
