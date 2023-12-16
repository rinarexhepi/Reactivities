

using Domain;
using MediatR;
using Persistence;

namespace Application.AutoretBoteror
{
    public class AutoriBoterorById
    {
        public class Query : IRequest<AutoriBoteror>
        {
            public int ID { get; set; }
        }

        public class Handler : IRequestHandler<Query, AutoriBoteror>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<AutoriBoteror> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.AutoriBoteror.FindAsync(request.ID);
            }
        }

    }
}
