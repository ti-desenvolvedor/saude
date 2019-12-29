@extends('layouts.applogin')

@section('content')


<div class="login-box">
    <div class="login-logo">
        <a href="{{ route('home') }}"><b>SI</b>Saúde</a>
    </div>
<div class="container">
    <div class="row justify-content-center">
        <div class="col">
            <div class="card">
                <div class="card-header">{{ __('Recuperar Senha') }}</div>

                <div class="card-body login-card-body ">
                    <p class="login-box-msg">Esqueceu sua senha? Aqui você pode recuperar facilmente uma nova senha.</p>
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('password.email') }}">
                        @csrf

                        <div class="">
                            <label for="email" class="col-md-12 col-form-label text-md-center">
                                {{ __('E-Mail') }}
                            </label>

                           <div class="input-group mb-3">
                                <input id="email" type="email" placeholder="E-mail" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>


                                <div class="input-group-append">
                                    <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                    </div>
                                </div>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-12">
                                <button type="submit" class="btn btn-primary btn-block">
                                    {{ __('Enviar link de redefinição de Senha') }}
                                </button>
                            </div>
                        </div>
                    </form>
                    <p class="mt-3 mb-1">
                    <a href="{{route('login')}}">Login</a>
                    </p>
                    <p class="mb-0">
                        <a href="{{route('register')}}">Registrar novo usuário</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
@endsection
