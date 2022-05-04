

using Domain;
using MediatR;
using Persistence;

namespace Application.Libraria
{
    public class LibriById
    {
        public class Query : IRequest<Libri>
        {
            public int ID { get; set; }
        }
        public class Handler : IRequestHandler<Query, Libri>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Libri> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Libri.FindAsync(request.ID);
            }

        }
    }
}
