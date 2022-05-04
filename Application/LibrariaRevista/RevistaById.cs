

using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaRevista
{
    public class RevistaById
    {
        public class Query : IRequest<Revista>
        {
            public int ID { get; set; }
        }

        public class Handler : IRequestHandler<Query, Revista>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Revista> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Revista.FindAsync(request.ID);
            }
        }

    }
}
