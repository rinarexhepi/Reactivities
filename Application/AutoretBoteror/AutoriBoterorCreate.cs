

using Domain;
using MediatR;
using Persistence;

namespace Application.AutoretBoteror
{
    public class AutoriBoterorCreate
    {
        public class Command : IRequest
        {
            public AutoriBoteror AutoriBoteror { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.AutoriBoteror.Add(request.AutoriBoteror);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
        
    }

}